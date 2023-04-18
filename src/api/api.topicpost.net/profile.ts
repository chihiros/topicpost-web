import { TopicPostAPI } from ".";

export interface ProfileRequest {
  nickname: string; // 必須
  icon_url: string; // 必須
}

export interface ProfileResponse {
  id: number;
  uuid: string;
  nickname: string;
  icon_url: string;
  created_at: string;
  updated_at: string;
}

interface ProfileMethods {
  get(): Promise<ProfileResponse>;
}

export class Profile implements ProfileMethods {
  topicpost = new TopicPostAPI();

  async get() {
    const res = await this.topicpost.get<ProfileResponse>("/profile");
    console.log(res);
    return res;
  }
}
