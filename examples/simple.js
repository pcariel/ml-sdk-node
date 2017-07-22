const ml = require('../dist');

const meli = new ml.MercadoLibre({
  appID: '2569082264513779',
  appSecret: 'tpfEohclHpCvde3LtBSiCnWFmLjWEjak',
  redirectUrl: 'http://localhost:4040',
  country: ml.Country.Venezuela
});


console.info(meli.getAuthorizeUrl());

const token = meli.token.getAccessToken('TG-5973d7b8e4b09fbde94ae696-164325476').then((res) => {
  console.info(res);
}, (error) => {
  console.info(error.toString());
})