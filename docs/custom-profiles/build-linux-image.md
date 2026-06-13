# Build a Linux Image

For most Linux distributions, we recommend starting from an official cloud image rather than installing the operating system from an ISO.

Cloud images already include cloud-init and are optimized for virtualized environments.

## Recommended Distributions

Official cloud images are available for many popular distributions:

- Ubuntu
- Debian
- AlmaLinux
- Rocky Linux
- Fedora
- openSUSE

## Workflow

```text
Download Cloud Image
        ↓
Customize (Optional)
        ↓
Convert to RAW
        ↓
Compress
        ↓
Upload
        ↓
Use URL in Custom Profile
```

## Download a Cloud Image

Example (Ubuntu 24.04):

```bash
wget https://cloud-images.ubuntu.com/noble/current/noble-server-cloudimg-amd64.img
```

Most cloud images are provided in QCOW2 format.

## Customize the Image (Optional)

If you need additional software, you can boot the image in a virtual machine and make your changes.

Common customizations include:

- Installing packages
- Creating users
- Configuring services
- Adding application files

When customization is complete, shut down the virtual machine cleanly.

## Convert to RAW

Convert the image to RAW format:

```bash
qemu-img convert \
    -O raw \
    noble-server-cloudimg-amd64.img \
    ubuntu.raw
```

## Compress the Image

We recommend Zstandard compression:

```bash
zstd -19 ubuntu.raw
```

This produces:

```text
ubuntu.raw.zst
```

## Upload the Image

Upload the compressed image to a location accessible via HTTP or HTTPS.

Examples:

- S3-compatible storage
- Cloudflare R2
- GitHub Releases
- Web servers
- CDN providers

The resulting URL can be used directly in a Custom Profile.

Example:

```text
https://example.com/images/ubuntu.raw.zst
```

## Alternative: Build from an ISO

If a cloud image is not available for your distribution, you can install the operating system from an ISO.

Requirements

- cloud-init must be installed
- the system must boot successfully
- shut down the virtual machine before capturing the image

No additional cloud-init configuration is required. TinyInstaller automatically configures cloud-init during deployment.

After installation:

1. Shut down the virtual machine.
2. Convert the disk to RAW format.
3. Compress the RAW image.
4. Upload the image and use its URL in your Custom Profile.

## Notes

For the best compatibility and deployment speed:

- Prefer official cloud images whenever possible.
- Use RAW images compressed with Zstandard (`.raw.zst`).
- Avoid distributing compressed virtual disk formats such as `.qcow2.zst` or `.vhdx.gz`.