# Host an Image

Before a Custom Profile can be used, the image must be accessible through a direct HTTP or HTTPS URL.

TinyInstaller downloads the image directly from the URL you provide, so the image must remain available throughout the deployment process.

## Requirements

The image URL should:

- Be publicly accessible
- Support direct file downloads
- Remain available during deployment
- Not require authentication, cookies, or interactive login

Example:

```text
https://example.com/images/windows.raw.zst
```

## Recommended Formats

For the best deployment performance, we recommend:

```text
.raw.zst
```

Other supported image formats include:

- RAW
- QCOW2
- VHD
- VHDX
- VMDK
- Other formats supported by QEMU

Supported compression formats for raw images:

- GZip (`.gz`)
- Zstandard (`.zst`)
- XZ (`.xz`)
- BZip2 (`.bz2`)

Compression is supported only for raw disk images.

> [!NOTE]
> Compressed virtual disk formats such as `.qcow2.zst`,
> `.vhdx.gz`, or `.vmdk.xz` are not supported.
> Convert the image to RAW before compressing.

## Hosting Providers

Any hosting provider that offers direct file downloads can be used.

Common options include:

### S3-Compatible Storage

Examples:

- Amazon S3
- Cloudflare R2
- MinIO
- Alibaba Cloud OSS
- Backblaze B2

These services are generally recommended for production use because they provide reliable downloads and high availability.

### GitHub Releases

GitHub Releases can be used for small or infrequently updated images.

Example:

```text
https://github.com/example/project/releases/download/v1.0/windows.raw.zst
```

### Web Servers

Any HTTP or HTTPS web server can host deployment images.

Examples:

- Nginx
- Apache
- Caddy

### CDN Providers

Images may also be distributed through a CDN to improve download performance.

## Verify the URL

Before using the image in a Custom Profile, verify that the URL can be downloaded directly.

Linux:

```bash
wget -O /dev/null https://example.com/image.raw.zst
```

Windows:

```powershell
Invoke-WebRequest `
    -Uri "https://example.com/image.raw.zst" `
    -OutFile "$env:TEMP\test.img"
```

If the download succeeds without requiring authentication, the URL is usually suitable for TinyInstaller.

## Large Images

Windows images can easily exceed several gigabytes.

To reduce bandwidth usage and improve deployment speed:

1. Convert the image to RAW format.
2. Compress it using Zstandard.

Example:

```bash
qemu-img convert -O raw windows.vhdx windows.raw
zstd -19 windows.raw
```

The resulting `.raw.zst` file is typically smaller and deploys faster than virtual disk formats such as QCOW2 or VHDX.

## Troubleshooting

### The deployment fails immediately

Verify that:

- The URL is correct
- The file exists
- The file is publicly accessible

### The deployment is slow

For the best performance:

- Use `.raw.zst` images
- Host images close to the deployment location
- Use a CDN or object storage service