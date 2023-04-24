import { TopicPostAPI } from ".";

export interface ProfileRequest {
  nickname: string; // 必須
  icon_url: string; // 必須
}

export interface ProfileResponse {
  data: {
    id: number;
    uuid: string;
    nickname: string;
    icon_url: string;
    created_at: string;
    updated_at: string;
  }[],
  errors: {
    code: string;
    message: string;
  },
  status: number;
}

interface ProfileMethods {
  get: () => Promise<{ data: ProfileResponse; status: number }>;
  post: (body: ProfileRequest) => Promise<{ data: ProfileResponse; status: number}>;
  put: (body: ProfileRequest) => Promise<{ data: ProfileResponse; status: number}>;
  delete: () => Promise<{ data: ProfileResponse; status: number}>;
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
