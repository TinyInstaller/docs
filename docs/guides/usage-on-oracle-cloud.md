# Install Windows on Oracle Cloud

## Step 1 - Generate init script from TinyInstaller

<!--@include: ./_parts/generate-init-script.md-->

## Step 2 - Create Windows VPS on Oracle Cloud with Init Script

### Create new VM Instance

Login to Oracle Cloud then click CREATE INSTANCE

![usage-on-oracle-cloud step 3](./images/usage-on-oracle-cloud-03.png)

### Choose Image and shape

Choose Ubuntu image, and AMD/Intel shape

![usage-on-oracle-cloud step 4](./images/usage-on-oracle-cloud-04.png)

### Set the initialization script

Scroll to bottom of page click on "Show advanced options" -> Management tab, then paste init script from TinyInstaller into Automation - Startup script

![usage-on-oracle-cloud step 5](./images/usage-on-oracle-cloud-05.png)

### Create VM

Finally click CREATE button to create VM

![usage-on-oracle-cloud step 6](./images/usage-on-oracle-cloud-06.png)

### Instance created

![usage-on-oracle-cloud step 7](./images/usage-on-oracle-cloud-07.png)

After instance created we go back to TinyInstaller -> Deployment History to check install status

## Step 3 - Check install status

You can monitor install processes at [Deployment History](https://tinyinstaller.top/account/instances)

![usage-on-oracle-cloud step 8](./images/usage-on-oracle-cloud-08.png)

You can view status detail by click the link on status column

![usage-on-oracle-cloud step 9](./images/usage-on-oracle-cloud-09.png)

## Step 4 - Access to Windows

When installation done, you can copy it and access to RDP

![usage-on-oracle-cloud step 10](./images/usage-on-oracle-cloud-10.png)

That's all, you now connect to windows via RDP. Everything is processed automatically.

