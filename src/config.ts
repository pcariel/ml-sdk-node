
export class Country {
  static Argentina = "https://auth.mercadolibre.com.ar";
  static Brasil = "https://auth.mercadolibre.com.br";
  static Colombia = 'https://auth.mercadolibre.com.co';
  static CostaRica = 'https://auth.mercadolibre.com.cr';
  static Ecuador = 'https://auth.mercadolibre.com.ec';
  static Chile = 'https://auth.mercadolibre.com.cl';
  static Mexico = 'https://auth.mercadolibre.com.mx';
  static Uruguay = 'https://auth.mercadolibre.com.uy';
  static Venezuela = 'https://auth.mercadolibre.com.ve';
  static Panama = 'https://auth.mercadolibre.com.pa';
  static Peru = 'https://auth.mercadolibre.com.pe';
  static Portugal = 'https://auth.mercadolibre.com.pt';
  static Dominicana = 'https://auth.mercadolibre.com.do';
  static Bolivia = 'https://auth.mercadolibre.com.bo';
  static Guatemala = 'https://auth.mercadolibre.com.gt';
  static Honduras = 'https://auth.mercadolibre.com.hn';
  static Nicaragua = 'https://auth.mercadolibre.com.ni';
  static paraguay = 'https://auth.mercadolibre.com.py';
  static Salvador = 'https://auth.mercadolibre.com.sv';
}
export const URL_AUTHORIZATION = '/authorization?';
export const URL_TOKEN = '/oauth/token';
export const HEADERS_DEFAULT = {
    "content-type": "application/json",
    'Accept': 'application/json',
    'User-Agent': 'ml-node-api-0.1'
};

export interface IConfig {
  // AppID is the applications' ID.
  clientId: string
  // AppSecret is the application's secret.
  clientSecret: string
  // RedirectURL is the URL to redirect users going through
  redirectUrl: string,

  country: string,
  // AccessToken is the Access for API
  accessToken?: string
}
