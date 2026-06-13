# Getting Started

## What is TinyInstaller?

TinyInstaller is an automated operating system deployment platform for VPS environments.

It allows you to install or reinstall Windows and Linux operating systems directly from an existing VPS without using rescue mode, VNC consoles, or manual installation procedures.

---

## How It Works

TinyInstaller runs directly on your existing VPS and automates the operating system deployment process.

During deployment, TinyInstaller will:

1. Download and prepare the selected operating system.
2. Configure disk partitions automatically.
3. Configure networking settings.
4. Install remote access services when applicable.
5. Configure the boot environment.
6. Reboot into the newly installed operating system.

Once deployment is complete, the server is ready for use.

::: danger Data Loss Warning

TinyInstaller performs a clean operating system deployment.

Existing operating systems, applications, configurations, and data on the target server may be permanently removed during deployment.

Always back up important data before proceeding.

:::

---

## Requirements

Before using TinyInstaller, ensure that your VPS meets the following requirements.

### Supported Source Operating Systems

TinyInstaller can be executed from:

- Ubuntu
- Debian
- Windows Server
- Windows Desktop editions

### Required Access

You must have:

- Root access on Linux systems, or
- Administrator privileges on Windows systems
- Internet connectivity
- A supported virtualization platform

### Supported Virtualization Platforms

TinyInstaller currently supports:

- KVM
- Hyper-V
- VMware
- Xen

### Unsupported Platforms

TinyInstaller does not currently support:

- OpenVZ
- ARM-based systems

---

## Available Operating Systems

TinyInstaller currently supports the following operating systems.

### Windows

- Windows Server 2012 R2
- Windows Server 2016
- Windows Server 2019
- Windows Server 2022
- ...

### Linux

- Linux Mint XFCE
- Debian 12
- Ubuntu 22
- ...


---

## Automatic Configuration

To reduce manual setup, TinyInstaller automatically configures common system components during deployment:

- Network settings
- Remote Desktop services
- Firewall rules
- Boot configuration

Most deployments do not require additional post-installation steps.

---

## Licensing

TinyInstaller provides deployment and automation services only.

Operating system licenses are not included.

If the selected operating system requires activation or licensing, you are responsible for obtaining and activating a valid license from the appropriate vendor.

---

## Deployment Guides

Choose the guide that matches your VPS provider:

- DigitalOcean Deployment
- Linode Deployment
- Generic Linux VPS Deployment

If your provider is not listed, start with the Generic Linux VPS Deployment guide.

---

## Need Help?

If you encounter issues during deployment:

- Verify that your virtualization platform is supported.
- Confirm that the source system is running Ubuntu or Debian.
- Ensure that root access is available.
- Review the troubleshooting documentation.

For advanced integrations and automation workflows, refer to the API documentation.