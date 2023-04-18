import { GetSession } from '../../utils/supabase';

export class TopicPostAPI {
  private baseUrl: string | undefined;

  constructor() {
    // this.baseUrl = process.env.TOPICPOST_API_URL;
    this.baseUrl = 'https://api.topicpost.net/v1';
  }

  async get<T>(endpoint: string): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
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

    async post<T>(endpoint: string, body: any): Promise<{ data: T, status: number }> {
    const session = await GetSession();
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
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

  async put<T>(endpoint: string, body: any): Promise<T> {
    const session = await GetSession();
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
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

  async delete<T>(endpoint: string): Promise<T> {
    const session = await GetSession();
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${session?.access_token}`,
      },
    });

    const res = await response.json();
    return res as T;
  }
}
