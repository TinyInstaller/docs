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

## Option 2: Build a Clean Image from Installation Media

TinyInstaller uses an offline installation process similar to Windows Setup.

This method does not require:

- Booting Windows
- Creating a temporary user account
- Entering Audit Mode
- Running Sysprep manually

Instead, Windows is applied directly from `install.wim` to a virtual disk.

### Requirements

- Windows installation ISO
- PowerShell
- A Windows machine or virtual machine
- Sufficient disk space

### Create a Virtual Disk

Create a fixed-size VHD.

A 15 GB disk is sufficient for most Windows editions.

```powershell
New-VHD `
    -Path .\windows.vhd `
    -SizeBytes 15GB `
    -Fixed
```

Mount the VHD:

```powershell
Mount-VHD .\windows.vhd
```

Initialize and format the disk.

### Apply Windows

Mount the Windows ISO and locate `install.wim`.

Apply the desired edition:

```powershell
dism /Apply-Image `
    /ImageFile:D:\sources\install.wim `
    /Index:1 `
    /ApplyDir:W:\
```

Replace:

- `D:` with the mounted ISO drive
- `W:` with the mounted Windows partition

### Create Boot Files

Generate boot files:

```powershell
bcdboot W:\Windows /s S: /f UEFI
```

### Install Drivers (Optional)

If required, additional drivers may be injected offline using DISM.

Example:

```powershell
dism /Image:W:\ `
     /Add-Driver `
     /Driver:C:\Drivers `
     /Recurse
```

### Capture the Image

After the image has been prepared:

```powershell
Dismount-VHD .\windows.vhd
```

The VHD is now ready for use.

### Convert to RAW

```bash
qemu-img convert -O raw windows.vhd windows.raw
```

### Compress

```bash
zstd -19 windows.raw
```

The resulting `.raw.zst` image can be uploaded and used directly in a Custom Profile.

## Why Build Your Own Image?

Building your own image may be useful if:

- You prefer to create images directly from official Microsoft installation media.
- You want full visibility into the image creation process.
- You require a specific Windows edition or configuration.
- TinyInstaller's built-in Windows profiles do not meet your requirements.
- Licensing, compliance, or organizational policies require self-built images.

This process produces a clean Windows image suitable for use with TinyInstaller Custom Profiles.