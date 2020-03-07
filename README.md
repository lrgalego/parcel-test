Install yarn:

`npm install -g yarn`

Install parcel bundler:

`npm install -g parcel-bundler`

If you run parcel server the depencency is duplicated in the bundle

`cd bundle; parcel index.js`

If you run pacel build the dependency is not duplicated

`cd bundle; parcel build index.js`


If you add the alias in the bundle package json. the depencency IS NOT duplicated in the server bundle

add `"decamelize": "./node_modules/decamelize"` in the bundle package.json

`cd bundle; parcel index.js`
