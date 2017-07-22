import { Product } from "../models";
import { APIRequest } from "../request";

export type TypeProductOrId = Product | string;

export interface IProduct {
  get(): Promise<Product>;
  getAll(): Promise<Product[]>;
  create(): Promise<boolean>;
  update(): Promise<boolean>;
  delete(id: TypeProductOrId): Promise<boolean>;
}

export class ProductService extends APIRequest implements IProduct {
  constructor(public accessToken: string) {
    super(accessToken);
  }
  public async create(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public async update(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public async delete(id: TypeProductOrId): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  public async get(): Promise<Product> {
    throw new Error("Method not implemented.");
  }
  public async getAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }

}