import { APIRequest } from "../request";
import { Token } from "../models";
import { URL_TOKEN, IConfig } from '../config';
import * as debug from "debug";
import { plainToClass } from "class-transformer";

const log = debug('MercadoLibre:TokenService');

export type TokenPromise = Promise<Token | Token[]>;

export interface IToken {
  getAccessToken(code: string): TokenPromise;
  refreshAccessToken(accessToken: string): TokenPromise;
}

export class TokenService extends APIRequest implements IToken {
  constructor(public config: IConfig) {
    super();
  }
  public async getAccessToken(code: string): TokenPromise {
    const uri: string = `${URL_TOKEN}`;
    const options = {
      grant_type: 'authorization_code',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      code,
      redirect_uri: this.config.redirectUrl
    };

    log('GET -> AccessToken, Code: ${code}');
    return this.post(uri, options)
      .then((resp) => plainToClass(Token, resp));
  }
  public async refreshAccessToken(refreshToken: string): TokenPromise {
    const uri: string = `${URL_TOKEN}`;
    const options = {
      grant_type: 'refresh_token',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      redirect_uri: this.config.redirectUrl,
      refresh_token: refreshToken
    };
    log('GET -> RefreshToken, ${refreshToken}');
    return this.post(uri, options)
      .then((resp) => plainToClass(Token, resp));
  }
}