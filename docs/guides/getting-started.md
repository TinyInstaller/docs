# Getting Started

## What is TinyInstaller?

TinyInstaller is an automated deployment platform that allows you to install Windows or Linux remote desktop environments on supported VPS providers.

Instead of using rescue mode, VNC consoles, or manual operating system installation procedures, TinyInstaller performs the deployment directly from an existing Linux server.

The deployment process is designed to be simple, fast, and provider-independent.

## How It Works

TinyInstaller runs on a VPS that already has a supported Linux distribution installed.

The deployment process will:

1. Deploy the selected operating system.
2. Configure disk partitions automatically.
3. Configure networking settings.
4. Enable remote desktop access.
5. Reboot into the newly installed operating system.

Once the deployment is complete, the server is ready for remote access.

## Requirements

Before using TinyInstaller, ensure that your VPS meets the following requirements:

### Supported Operating Systems

The deployment script must be executed on:

- Ubuntu
- Debian

### Required Permissions

You must have:

- Root access
- Internet connectivity
- A supported virtualization platform

### Supported Virtualization Platforms

TinyInstaller supports:

- KVM
- Hyper-V
- VMware
- Xen

### Unsupported Platforms

TinyInstaller does not support:

- OpenVZ
- ARM-based processors

## Available Operating Systems

TinyInstaller currently supports the following operating systems.

### Windows

- Windows Server 2012
- Windows Server 2016
- Windows Server 2019
- Windows Server 2022
- Windows 10 LTSC 2019
- Windows 10 LTSC 2021
- Windows 10 Pro

### Linux

- Linux Mint XFCE (RDP enabled)
- Debian 12

Additional operating systems may be added in future releases.

## Automatic Configuration

During deployment, TinyInstaller automatically configures:

- Network settings
- Remote Desktop services
- Firewall rules
- System boot configuration

No manual post-installation setup is required in most cases.

## Licensing

TinyInstaller provides deployment services only.

Operating system licenses are not included.

If the selected operating system requires activation or licensing, you are responsible for obtaining and activating a valid license.

## Recommended Guides

Choose the guide that matches your VPS provider:

- DigitalOcean Deployment
- Linode Deployment
- Generic Linux VPS Deployment

If your provider is not listed, start with the Generic Linux VPS guide.

## Need Help?

If you encounter issues during deployment:

- Verify that your virtualization platform is supported.
- Confirm that you are using Ubuntu or Debian as the source system.
- Check that root access is available.
- Review the troubleshooting section of the documentation.

You can also consult the API documentation for advanced integrations and automation workflows.