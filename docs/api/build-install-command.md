# Build Install Command

## Install Command

Parameters:\
`setup_url`: Setup URL obtained from the [Access Info Api](api-requests#get-access-info)\
`key`: Setup key obtained from the [Access Info Api](api-requests#get-access-info)

### Base Command

```
({setup_url} -4O setup.sh || curl {setup_url} -Lo setup.sh) && bash setup.sh {key}
```

When you run this command, you will be prompted to select an image. To use a pre-selected image, refer to the section below.

### Pre-selected Image Command

Append -i={image\_id} to the base command.\
`image_id` can be found in [Images Api](api-requests#get-images)

### Choose port, username and password

-port={portnumber}\
-username={username} \
-password={password}

### Pre-Confirmed Command

Append `-y` to the command to skip confirmation prompts.

### Force Install (skip port check)

To skip port check, append `-f`  to the command

## Init Script

```
#!/bin/bash
tries=10
while [ $tries -gt 0 ] && ! { (wget {setup_url} -4O install.sh || curl {setup_url} -Lo install.sh); } ; do
    echo "Download failed, retrying $tries more times"
    tries=$((tries-1))
    sleep 10
    echo -e "nameserver 8.8.8.8\nnameserver 1.1.1.1" > /etc/resolv.conf
done
bash install.sh {key} -i={image_id} -y

```

