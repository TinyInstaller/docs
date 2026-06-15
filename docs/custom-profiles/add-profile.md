# Add a Custom Profile

A Custom Profile allows you to deploy your own operating system image instead of using one of the built-in deployment profiles.

To create a new Custom Profile, navigate to **My Access → Custom Profiles** and click **Add**.

## Profile Settings

### Name

Enter a descriptive name for the profile.

Examples:

- Ubuntu 24.04
- Debian 13 Docker
- Windows Server 2025
- My Custom Linux

The name is only used for identification and does not affect deployment behavior.

### Source

Choose how the profile should obtain its operating system image.

#### Custom URL

Use a direct URL to your own image file.

Supported image formats include:

<!--@include: ./includes/supported-formats.md-->

Example:

```text
https://example.com/images/ubuntu-24.04.raw.zst
```

For the best deployment performance, we recommend using compressed raw images such as `.raw.zst`.

#### Base Profile

Create a new profile based on an existing TinyInstaller deployment profile.

This option is useful when you want to:

- Reuse an existing profile
- Customize post-deployment behavior
- Create multiple variants of the same operating system

## Image URL Requirements

The image URL must:

- Be publicly accessible
- Support direct file downloads
- Remain available during deployment

Examples of supported hosting providers:

- HTTP/HTTPS web servers
- Object storage services (S3, R2, OSS, MinIO, etc.)
- GitHub Releases
- CDN-hosted files

For more information, see **Host the Image**.

## Custom Command

The Custom Command field allows you to run a shell script or command after the operating system has been deployed.

Common use cases include:

- Installing software packages
- Downloading additional files
- Configuring services
- Applying system settings
- Running automation scripts

Example:

```bash
apt update
apt install -y docker.io
systemctl enable docker
```

The command runs after the deployment process has completed.

## Save the Profile

After completing the form:

1. Enter a profile name.
2. Select a source.
3. Provide an image URL or choose a base profile.
4. (Optional) Add a custom command.
5. Click **Save Changes**.

The new profile will appear in your Custom Profiles list and can be used in future deployments.