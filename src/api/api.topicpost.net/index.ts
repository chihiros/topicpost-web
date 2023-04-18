import { GetSession } from '../../utils/supabase';

export class TopicPostAPI {
  private baseUrl: string | undefined;

  constructor() {
    this.baseUrl = process.env.TOPICPOST_API_URL;
  }

  async get<T>(endpoint: string): Promise<T> {
    GetSession().then((session) => {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });

      console.log(response);

      const res = await response.json();
      return res as T;
    });
  }
}
