import { Expose } from "class-transformer";

export class Token {

  @Expose({ name: 'access_token' })
  accessToken: string;

  @Expose({ name: 'token_type' })
  tokenType: string;
  
  @Expose({ name: 'expires_in' })
  expired_in: number;

  @Expose()
  scope: string;

  @Expose({ name: 'refresh_token' })
  refreshToken: string;

  @Expose({ name: 'user_id' })
  userId: number;
}