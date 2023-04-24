import { GetSession } from '../../utils/supabase';

export class TopicPostAPI {
  private baseUrl: string | undefined;
  private uri: string;
  private url: string;

  constructor() {
    // this.baseUrl = process.env.TOPICPOST_API_URL;
    this.baseUrl = 'https://api.topicpost.net/v1';
    this.uri = '/profile';
    this.url = `${this.baseUrl}${this.uri}`;
  }

  async get<T>(endpoint: string): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const response = await fetch(this.url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${session?.access_token}`,
      },
    });

    const data = await response.json();
    const status = response.status;
    const res = {
      data: data.data,
      errors: data.errors,
      status: status
    };

    return res;
  }

    async post<T>(endpoint: string, body: any): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const response = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${session?.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const status = response.status;
    const res = {
      data: data.data[0],
      errors: data.errors,
      status: status
    };

    return res;
  }

  async put<T>(endpoint: string, body: any): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const response = await fetch(this.url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${session?.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const status = response.status;
    const res = {
      data: data.data[0],
      errors: data.errors,
      status: status
    };

    return res;
  }

  async delete<T>(endpoint: string): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const response = await fetch(this.url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${session?.access_token}`,
      },
    });

    const data = await response.json();
    const status = response.status;
    const res = {
      data: data.data[0],
      errors: data.errors,
      status: status
    };

    return res;
  }
}
