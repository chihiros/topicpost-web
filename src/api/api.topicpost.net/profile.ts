import { TopicPostAPI, Response } from ".";

export interface ProfileRequest {
  nickname: string; // 必須
  icon_url: string; // 必須
}

interface ProfileData {
  id: number;
  uuid: string;
  nickname: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
};

export interface ProfileResponse extends Response<ProfileData> { }

interface ProfileMethods {
  get: () => Promise<ProfileResponse>;
  post: (body: ProfileRequest) => Promise<ProfileResponse>;
  put: (body: ProfileRequest) => Promise<ProfileResponse>;
  delete: () => Promise<ProfileResponse>;
}

export class Profile implements ProfileMethods {
  topicpost = new TopicPostAPI("/profile");

  async get() {
    const res = await this.topicpost.get<ProfileResponse>();
    return res;
  }

  async post(body: ProfileRequest) {
    const res = await this.topicpost.post<ProfileResponse>(body);
    return res;
  }

  async put(body: ProfileRequest) {
    const res = await this.topicpost.put<ProfileResponse>(body);
    return res;
  }

  async delete() {
    const res = await this.topicpost.delete<ProfileResponse>();
    return res;
  }
}
