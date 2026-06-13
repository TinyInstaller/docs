# Open Firewall on Oracle Cloud

From Instance detail click on subnet link

![open-firewall-on-oracle-cloud step 1](./images/open-firewall-on-oracle-cloud-01.png)

On subnet page, select Default security list

![open-firewall-on-oracle-cloud step 2](./images/open-firewall-on-oracle-cloud-02.png)

Then Add new Ingress rule

![open-firewall-on-oracle-cloud step 3](./images/open-firewall-on-oracle-cloud-03.png)

Open All ports by set Source to 0.0.0.0/0 and All Protocols

![open-firewall-on-oracle-cloud step 4](./images/open-firewall-on-oracle-cloud-04.png)

You may open specified port only by select TCP protocol, and input source and destination ports

