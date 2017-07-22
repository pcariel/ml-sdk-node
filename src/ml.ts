import { IConfig, Country, URL_AUTHORIZATION } from './config';
import { 
  UserService,
  ProductService,
  TokenService
} from "./services";
import * as qs from "querystring";
import * as requestPromise from "request-promise-native";

export class MercadoLibre {

  public token: TokenService;
  public user: UserService;
  public Product: ProductService;

  constructor(public config: IConfig) {
    this.token = new TokenService(config);
  }

  /**
   * getAuthorizeUrl returns a URL to OAuth 2.0 provider's consent page
   */
  getAuthorizeUrl(state?: string): string {
    const query:string = qs.stringify({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUrl,
      response_type: 'code',
    });
    return `${this.config.country}${URL_AUTHORIZATION}${query}`;
  }
}
