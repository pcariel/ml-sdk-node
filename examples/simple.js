const ml = require('../dist');

const meli = new ml.MercadoLibre({
  appID: '...',
  appSecret: '...',
  redirectUrl: '...',
  country: ml.Country.Venezuela
});


console.info(meli.getAuthorizeUrl());

const token = meli.token.getAccessToken('...').then((res) => {
  console.info(res);
}, (error) => {
  console.info(error.toString());
})