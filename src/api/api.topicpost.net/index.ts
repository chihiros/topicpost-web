import { GetSession } from '../../utils/supabase';

export interface Response<T> {
  data: T[];
  errors: {
    code: string;
    message: string;
  }
  status: number;
};

export class TopicPostAPI {
  private baseUrl: string | undefined;
  private url: string;

  constructor(uri: string) {
    this.baseUrl = process.env.TOPICPOST_API_HOST + '/v1';
    // this.baseUrl = 'https://api.topicpost.net/v1';
    this.url = `${this.baseUrl}${uri}`
  }

  private async request<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: any, authRequired: boolean = false): Promise<Response<T>> {
    const headers: HeadersInit = {};

    if (authRequired) {
      const session = await GetSession();
      headers['Authorization'] = `Bearer ${session?.access_token}`;
    }

    if (body) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(body);
    }

    const response = await fetch(this.url, {
      method,
      headers,
      body,
    });

    const data = await response.json();
    const res: Response<T> = {
      data: data.data,
      errors: data.errors,
      status: response.status,
    };

    return res;
  }

  async get<T>(authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>('GET', undefined, authRequired);
  }

  async post<T>(body: any, authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>('POST', body, authRequired);
  }

  async put<T>(body: any, authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>('PUT', body, authRequired);
  }

  async delete<T>(authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>('DELETE', undefined, authRequired);
  }
}
