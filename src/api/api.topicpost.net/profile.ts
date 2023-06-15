import { TopicPostAPI, Response } from ".";

export interface ProfileRequest {
  nickname: string; // 必須
  icon_url: string; // 必須
}

export interface ProfileData {
  id: number;
  uuid: string;
  nickname: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
  edges: any;
};

export interface ProfileResponse extends Response<ProfileData> { }

interface ProfileMethods {
  get: () => Promise<ProfileResponse>;
  post: (body?: ProfileRequest) => Promise<ProfileResponse>;
  put: (body: ProfileRequest) => Promise<ProfileResponse>;
  delete: () => Promise<ProfileResponse>;
}

export default class Profile implements ProfileMethods {
  topicpost = new TopicPostAPI("/profile");
  authRequired = true;

  async get(): Promise<ProfileResponse> {
    const res = await this.topicpost.get<ProfileData>({}, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async post(body?: ProfileRequest): Promise<ProfileResponse> {
    const res = await this.topicpost.post<ProfileData>(body, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async put(body: ProfileRequest): Promise<ProfileResponse> {
    const res = await this.topicpost.put<ProfileData>(body, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async delete(): Promise<ProfileResponse> {
    const res = await this.topicpost.delete<ProfileData>(this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }
}
