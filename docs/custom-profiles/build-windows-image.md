# Build a Windows Image

TinyInstaller is compatible with Sysprep generalized Windows images.

If you already have a generalized Windows image, you can use it directly after converting it to the recommended format.

This guide also explains how to build a clean Windows image from official Microsoft installation media without booting into Windows or running Sysprep manually.

## Option 1: Use an Existing Generalized Image

If you already have a Sysprep generalized image, no additional preparation is required.

Supported formats include:

- VHD
- VHDX
- QCOW2
- RAW
- VMDK

For best deployment performance, convert the image to RAW format and compress it with Zstandard:

```bash
qemu-img convert -O raw image.vhdx windows.raw
zstd -19 windows.raw
```

The resulting `.raw.zst` file can be used directly in a Custom Profile.

# Option 2: Build a Clean Image from Installation Media

TinyInstaller uses an offline installation process similar to Windows Setup.

This method does not require:

- Booting Windows
- Creating a temporary user account
- Entering Audit Mode
- Running Sysprep manually

Because Windows is applied directly from `install.wim`, the resulting installation is already in a generalized state and is ready for deployment.

## Requirements

- Windows installation ISO
- PowerShell
- A Windows machine or virtual machine
- Sufficient disk space

## Choose an Image Index

Before applying the image, determine which Windows edition you want to install.

```powershell
Get-WindowsImage -ImagePath D:\sources\install.wim
```

or

```powershell
dism /Get-ImageInfo /ImageFile:D:\sources\install.wim
```

Make note of the image index corresponding to the desired edition (for example, Windows 11 Pro).

## Create a Virtual Disk

The following example creates a dynamically expanding 15 GB VHD.

The example uses an MBR partition layout for maximum compatibility.

```powershell
$vhdPath = "C:\windows.vhd"

@"
create vdisk file="$vhdPath" maximum=15360 type=expandable
select vdisk file="$vhdPath"
attach vdisk
"@ | diskpart

$disk = Get-DiskImage -ImagePath $vhdPath | Get-Disk
$diskNumber = $disk.Number

Initialize-Disk -Number $diskNumber -PartitionStyle MBR

$p1 = New-Partition `
    -DiskNumber $diskNumber `
    -Size 300MB `
    -AssignDriveLetter

Format-Volume `
    -Partition $p1 `
    -FileSystem FAT32 `
    -NewFileSystemLabel BOOT `
    -Confirm:$false
    
Set-Partition `
    -DiskNumber $diskNumber `
    -PartitionNumber $p1.PartitionNumber `
    -IsActive $true

$p2 = New-Partition `
    -DiskNumber $diskNumber `
    -UseMaximumSize `
    -AssignDriveLetter



Format-Volume `
    -Partition $p2 `
    -FileSystem NTFS `
    -NewFileSystemLabel Windows `
    -Confirm:$false

$bootDrive = ($p1 | Get-Volume).DriveLetter + ":"
$winDrive  = ($p2 | Get-Volume).DriveLetter + ":"
```

## Apply Windows

Apply the selected Windows image to the virtual disk.

```powershell
dism /apply-image `
     /imagefile:D:\sources\install.wim `
     /index:1 `
     /applydir:$winDrive
```

Replace the image index with the edition selected in the previous step.

## Create Boot Files

Generate the boot configuration.

```powershell
bcdboot "$winDrive\Windows" /s $bootDrive /f ALL /offline
```

## Install Drivers (Optional)

Additional drivers may be injected offline using DISM.

```powershell
dism /Image:$winDrive `
     /Add-Driver `
     /Driver:C:\Drivers `
     /Recurse
```

## Additional Customizations (Optional)

Additional packages, features, or customizations can be applied before finalizing the image.

Examples:

```powershell
dism /Image:$winDrive `
     /Add-Package `
     /PackagePath:update.cab
```

```powershell
dism /Image:$winDrive `
     /Enable-Feature `
     /FeatureName:NetFx3
```

## Finalize the Image

Detach the virtual disk after all modifications have been completed.

```powershell
Dismount-DiskImage -ImagePath $vhdPath
```

## Convert to RAW

The virtual disk must be detached before conversion.

```bash
qemu-img convert -O raw windows.vhd windows.raw
```

## Compress

Compress the RAW image using Zstandard.

```bash
zstd -19 windows.raw
```

The resulting `.raw.zst` file can be uploaded and used directly in a TinyInstaller Custom Profile.

## Why Build Your Own Image?

Building your own image may be useful if:

- You prefer to create images directly from official Microsoft installation media.
- You want full visibility into the image creation process.
- You require a specific Windows edition or configuration.
- TinyInstaller's built-in Windows profiles do not meet your requirements.
- Licensing, compliance, or organizational policies require self-built images.

This process produces a clean Windows image suitable for use with TinyInstaller Custom Profiles.