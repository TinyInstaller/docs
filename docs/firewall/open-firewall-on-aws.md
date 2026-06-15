# Open Firewall on AWS

## Open Security Group

Select instance -> Security tab -> Click on security group

![open-firewall-on-aws step 1](./images/open-firewall-on-aws-01.png)

## Open a port

In security group click on Edit Inbound rules

![open-firewall-on-aws step 2](./images/open-firewall-on-aws-02.png)

Then click Add rule

![open-firewall-on-aws step 3](./images/open-firewall-on-aws-03.png)

Fill infomation and save

Type: Custom TCP\
Port: 3389 (or your selected port in tiny)\
Source Anywhere IPv4

![open-firewall-on-aws step 4](./images/open-firewall-on-aws-04.png)

Verify that you see the added rule

![open-firewall-on-aws step 5](./images/open-firewall-on-aws-05.png)

