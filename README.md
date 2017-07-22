# ml-sdk-node
MercadoLibre API Library for Node.js

## Usage

```javascript
const ml = require('ml-sdk-node');

const meli = ml.MercadoLibre({
  appID: '...',
  appSecret: '...',
  redirectUrl: '...',
  country: ml.Country.Venezuela
});

console.info(meli.getAuthorizeUrl());

```

```shell
npm install ml-sdk-node
```
