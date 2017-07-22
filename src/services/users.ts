import { User } from "../models/user";
import { APIRequest } from "../request";
export type TypeUserOrId = User | string;

export interface IUser {
  get(id?: string): Promise<User>;
  getBrands(id: TypeUserOrId): Promise<User>;
  getPromotionPacks(id: TypeUserOrId, type?: string): Promise<User>;
  getListingTypes(id: TypeUserOrId, categoriaId?: string): Promise<User>;
  update(id: string): Promise<boolean>;
}

export class UserService extends APIRequest implements IUser {
  constructor(public accessToken: string) {
    super(accessToken);
  }
  public async get(id?: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  public async getBrands(id: TypeUserOrId): Promise<User> {
    throw new Error("Method not implemented.");
  }
  public async getPromotionPacks(id: TypeUserOrId, type?: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  public async getListingTypes(id: TypeUserOrId, categoriaId?: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  public async update(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}