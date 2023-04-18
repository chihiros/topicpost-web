import { GetSession } from '../../utils/supabase';

export class TopicPostAPI {
  private baseUrl: string | undefined;

  constructor() {
    this.baseUrl = process.env.TOPICPOST_API_URL;
  }

  public get(uri: string) {
    const url = `${this.host}${uri}`;

    GetSession().then((session) => {
      return fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${session?.access_token}`,
        },
      });
    });
  }
}
