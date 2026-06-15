# Custom Profiles

Custom Profiles allow you to deploy your own operating system images instead of using the built-in deployment profiles provided by TinyInstaller.

A custom profile consists of:

- A disk image URL
- An optional post-deployment command
- Basic deployment settings

Custom Profiles are useful when you need:

- A custom Linux image with pre-installed software
- A customized Windows image
- A specific operating system version not available in the built-in profiles
- A reusable deployment configuration for multiple servers

## Supported Image Types

TinyInstaller supports:

<!--@include: ./includes/supported-formats.md-->

For the best deployment performance, compressed raw images such as `.raw.zst` are recommended.

## Workflow

Creating a custom profile typically involves the following steps:

```text
Build an Image
      ↓
Host the Image
      ↓
Create a Custom Profile
      ↓
Deploy
```

Depending on the operating system, image preparation may differ:

- Linux images typically use cloud-init.
- Windows images typically use Sysprep.

Continue with the next sections to learn how to build, host, and deploy custom images.