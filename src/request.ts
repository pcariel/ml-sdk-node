import { HEADERS_DEFAULT } from "./config";
import * as requestPromise from "request-promise-native";
import * as debug from "debug";

const URL_API_BASE = 'https://api.mercadolibre.com';
const URL_API_TOKEN = URL_API_BASE + 'oauth/token';

const log = debug('MercadoLibre:Request');

export class APIRequest {
    constructor(public accessToken?: string) {

    }
    public async get(endpoint: string, options?: any): Promise<any> {
        return this.request('GET', endpoint, options);
    }

    public async post(endpoint: string, options?: any): Promise<any> {
        return this.request('POST', endpoint, options);
    }
    
    public async put(endpoint: string, options?: any): Promise<any> {
        return this.request('PUT', endpoint, options);
    }
    public async delete(endpoint: string, options?: any): Promise<any> {
        return this.request('DELETE', endpoint, options);
    }

    public async request(
        type: string,
        endpoint: string,
        options: any = {},
        uriAbsolute?: boolean
    ): Promise<any> {
        const uri = (endpoint.startsWith('http')) ? `${endpoint}`: `${URL_API_BASE}${endpoint}`;
        const key = (type !== 'POST') ? 'qs' : 'form';

        log(`${type} to ${uri}`);
        return requestPromise({
            uri,
            [key]: { ...options },
            method: type,
            headers: { ...HEADERS_DEFAULT },
            json: true,
        })
        //Custon Response
        .then((res) => {
            return res;
        })
        //Custom error
        .catch((err) => {
            const error = err.error;
            log(`Request catch`);
            throw new ResponseError(error.message, error.status, error.error);
        });
    }
}

export class ResponseError extends Error {
    constructor(
        public message: string,
        public code:number,
        public error: string) {
        super(message);
    }
}