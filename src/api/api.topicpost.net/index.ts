import { GetSession } from '../../utils/supabase';

export interface Response<T> {
  data: T[];
  errors: {
    code: string;
    message: string;
  }
  status: number;
};

interface RequestOptions<T> {
  query?: Record<string, any>;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: T;
  authRequired?: boolean;
}

export class TopicPostAPI {
  private baseUrl: string | undefined;
  private url: string;

  constructor(uri: string) {
    this.baseUrl = process.env.REACT_APP_TOPICPOST_API_HOST + '/v1';
    // this.baseUrl = 'https://api.topicpost.net/v1';
    this.url = `${this.baseUrl}${uri}`
  }

  private async request<T>(options: RequestOptions<T>): Promise<Response<T>> {
    const headers: HeadersInit = {};

    if (options.authRequired) {
      const session = await GetSession();
      headers['Authorization'] = `Bearer ${session?.access_token}`;
    }

    // Queryパラメータがある場合はURLに追加する
    if (options.query) {
      const queryParameters = new URLSearchParams(options.query as any).toString();
      this.url = `${this.url}?${queryParameters}`;
    }

    let body = options.body ? JSON.stringify(options.body) : undefined;
    if (options.body) {
      headers['Content-Type'] = 'application/json';
      body = JSON.stringify(options.body);
    }

    const response = await fetch(this.url, {
      method: options.method,
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

  async get<T>(params?: Record<string, any>, authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>({
      query: params,
      method: 'GET',
      authRequired,
    });
  }

  async post<T>(body: any, authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>({
      method: 'POST',
      body,
      authRequired,
    });
  }

  async put<T>(body: any, authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>({
      method: 'PUT',
      body,
      authRequired,
    });
  }

  async delete<T>(authRequired: boolean = false): Promise<Response<T>> {
    return this.request<T>({
      method: 'DELETE',
      authRequired,
    });
  }
}
