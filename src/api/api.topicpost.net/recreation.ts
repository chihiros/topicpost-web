import { TopicPostAPI, Response } from ".";

export interface RecreationRequest {
  user_id: string;
  recreation_id: string;
  genre: number[];
  title: string;
  content: string;
  target_number: number;
  required_time: number;
}
export interface RecreationData {
  id: number;
  user_id: string;
  recreation_id: string;
  genre: number[];
  title: string;
  content: string;
  target_number: number;
  required_time: number;
  created_at: string;
  updated_at: string;
};

export interface RecreationResponse extends Response<RecreationData> { }

interface ProfileMethods {
  get: () => Promise<RecreationResponse>;
  post: (body: RecreationRequest) => Promise<RecreationResponse>;
  put: (body: RecreationRequest) => Promise<RecreationResponse>;
  delete: () => Promise<RecreationResponse>;
}

export class Profile implements ProfileMethods {
  topicpost = new TopicPostAPI("/profile");

  async get(): Promise<RecreationResponse> {
    const res = await this.topicpost.get<RecreationData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async post(body: RecreationRequest): Promise<RecreationResponse> {
    const res = await this.topicpost.post<RecreationData>(body);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async put(body: RecreationRequest): Promise<RecreationResponse> {
    const res = await this.topicpost.put<RecreationData>(body);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async delete(): Promise<RecreationResponse> {
    const res = await this.topicpost.delete<RecreationData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }
}
