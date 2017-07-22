import { APIRequest } from "../request";
import { Token } from "../models";
import { URL_TOKEN, IConfig } from '../config';
import * as debug from "debug";

const log = debug('MercadoLibre:TokenService');

export interface IToken {
  getAccessToken(code: string): Promise<Token>;
  refreshAccessToken(accessToken: string): Promise<Token>;
}

export class TokenService extends APIRequest implements IToken {
  constructor(public config: IConfig) {
    super();
  }
  public async getAccessToken(code: string): Promise<Token> {
    const uri:string = `${URL_TOKEN}`;
    const options = {
      grant_type: 'authorization_code',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      code,
      redirect_uri: this.config.redirectUrl
    };

    log('GET -> AccessToken, Code: ${code}');
    return this.post(uri, options);
  }
  public async refreshAccessToken(accessToken: string): Promise<Token> {
    throw new Error("Method not implemented.");
  }
}