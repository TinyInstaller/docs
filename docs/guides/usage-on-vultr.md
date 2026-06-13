# Install Windows on Vultr

## Step 1 - Generate init script from TinyInstaller

<!--@include: ./_parts/generate-init-script.md-->

## Step 2 - Create Windows VPS on Vultr with Init Script

#### Login to Vultr Account

![usage-on-vultr step 3](./images/usage-on-vultr-03.png)

#### Deploy Server

1. From vultr dashboard just click + or Deploy Server
2. Select any location and server size you want
3. At Server Image please make sure you select "**Debian**"

![Select Debian Image](./images/usage-on-vultr-04.png)

Enable Cloud-Init and paste init script which copy from step 1.

![usage-on-vultr step 5](./images/usage-on-vultr-05.png)

Select Qty then click Deploy Now

Note: the number of servers should not exceed Max install process on your TinyInstaller's key

![usage-on-vultr step 6](./images/usage-on-vultr-06.png)

#### Wait for instances

![usage-on-vultr step 7](./images/usage-on-vultr-07.png)

## Step 3 - Check install status

You can monitor install processes at [Deployment History](https://tinyinstaller.top/account/instances)

![usage-on-vultr step 8](./images/usage-on-vultr-08.png)

![usage-on-vultr step 9](./images/usage-on-vultr-09.png)

## Step 4 - Access to Windows

When installation done, you can copy it and access to RDP

![usage-on-vultr step 10](./images/usage-on-vultr-10.png)

Open Remote Desktop Connection app

![usage-on-vultr step 11](./images/usage-on-vultr-11.png)

Copy and input IP address need to copy port as well then click connect

![usage-on-vultr step 12](./images/usage-on-vultr-12.png)

Input credentials then click OK

![usage-on-vultr step 13](./images/usage-on-vultr-13.png)

That's all, you now connect to windows via RDP. Everything is processed automatically.

