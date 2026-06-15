# Open Firewall on Google Cloud

## Step 1 - Locate firewall settings

### VPC network

Login to google cloud, select your project, choose VPC Network from quick access. If it not appear in Quick access then you may need to find it in View all products

![open-firewall-on-google-cloud step 1](./images/open-firewall-on-google-cloud-01.png)

### Firewall

From VPC network choose Firewall

![open-firewall-on-google-cloud step 2](./images/open-firewall-on-google-cloud-02.png)

## Step 2 - Create firewall rule

Choose Create Firewall Rule

![open-firewall-on-google-cloud step 3](./images/open-firewall-on-google-cloud-03.png)

Fill the firewall settings

* Direction of traffic: Ingress
* Action on match: Allow
* Targets: All instances
* Source IP: 0.0.0.0/0
* Port: the port you want to open eg: 2345

![open-firewall-on-google-cloud step 4](./images/open-firewall-on-google-cloud-04.png)

Click Create to create the rule

![open-firewall-on-google-cloud step 5](./images/open-firewall-on-google-cloud-05.png)

