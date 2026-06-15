# Api Requests

## Authenticating requests <a href="#authenticating-requests" id="authenticating-requests"></a>

To authenticate requests, include an **`Authorization`** header with the value **`"Bearer {YOUR_ACCESS_KEY}"`**.

## Get access info

`GET` https://tinyinstaller.top/api/v1/my/info \
Headers: \
`Authorization`: `Bearer {YOUR_ACCESS_KEY}`

### Get images

`GET` https://tinyinstaller.top/api/v1/my/images \
Headers: \
`Authorization`: `Bearer {YOUR_ACCESS_KEY}`\
Body Parameters:\
`q`  Search keyword. Example win2012\
`page` Pagination page. Example: 2

### Get instances

`GET`  https://tinyinstaller.top/api/v1/my/instances \
Headers: \
`Authorization`: `Bearer {YOUR_ACCESS_KEY}` \
Body Parameters:\
`ip_address` Filter by ip address. Example 123.123.123.123\
`status` Filter by status, available statuses: new, wait_for_tiny, installing, installed, error, timed_out, done\
`page` Pagination page. Example 2
 

### Get instance detail

`GET` https://tinyinstaller.top/api/v1/my/instances/{id} \
Headers: \
`Authorization`: `Bearer {YOUR_ACCESS_KEY}` \
Url parameters:\
`id` Instance id from list. Example: 22353604-ae4a-47b3-8d70-ef919a9445e2

### Regenerate setup key

`POST` https://tinyinstaller.top/api/v1/my/key/regenerate \
Headers: \
`Authorization`: `Bearer {YOUR_ACCESS_KEY}`

