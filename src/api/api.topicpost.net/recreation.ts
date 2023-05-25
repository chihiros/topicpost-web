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

export interface ProfileData {
  id: number;
  uuid: string;
  nickname: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
};

export interface ProfileResponse extends Response<RecreationData> { }

interface ProfileMethods {
  get: () => Promise<ProfileResponse>;
  post: (body: RecreationRequest) => Promise<ProfileResponse>;
  put: (body: RecreationRequest) => Promise<ProfileResponse>;
  delete: () => Promise<ProfileResponse>;
}

export class Profile implements ProfileMethods {
  topicpost = new TopicPostAPI("/profile");

  async get(): Promise<ProfileResponse> {
    const res = await this.topicpost.get<RecreationData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async post(body: RecreationRequest): Promise<ProfileResponse> {
    const res = await this.topicpost.post<ProfileData>(body);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async put(body: RecreationRequest): Promise<ProfileResponse> {
    const res = await this.topicpost.put<ProfileData>(body);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async delete(): Promise<ProfileResponse> {
    const res = await this.topicpost.delete<ProfileData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }
}
