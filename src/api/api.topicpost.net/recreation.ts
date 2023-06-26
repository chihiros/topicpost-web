import { TopicPostAPI, Response } from ".";
import { ProfileData } from "./profile";

export interface RecreationRequest {
  user_id: string;
  recreation_id: string;
  genre: number[];
  title: string;
  content: string;
  youtube_id: string | null;
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
  youtube_id: string | null;
  target_number: number;
  required_time: number;
  publish: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  edges: {
    profile: ProfileData;
  };
};

export interface RecreationsData {
  recreations: RecreationData[];
  total_records: number;
};

export interface RecreationResponse extends Response<RecreationData> { }
export interface RecreationsResponse extends Response<RecreationsData> { }

interface RecreationMethods {
  // get: (page: number) => Promise<RecreationsResponse>;
  get: (limit: number, offset: number) => Promise<RecreationsResponse>;
  getByRecreationID: (id: string) => Promise<RecreationResponse>;
  post: (body: RecreationRequest) => Promise<RecreationResponse>;
  put: (body: RecreationRequest) => Promise<RecreationResponse>;
  putDraft: (body: RecreationRequest) => Promise<RecreationResponse>;
  delete: () => Promise<RecreationResponse>;
}

export default class Recreation implements RecreationMethods {
  topicpost_recreation = new TopicPostAPI("/recreation");
  topicpost_recreation_draft = new TopicPostAPI("/recreation/draft");
  authRequired = true;

  // async get(page: number): Promise<RecreationsResponse> {
  async get(limit: number, offset: number): Promise<RecreationsResponse> {
    // const limit = 10;
    const param: Record<string, any> = {
      limit: limit,
      // offset: limit * (page - 1),
      offset: offset,
    };

    const res = await this.topicpost_recreation.get<RecreationsData>(param);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async getByRecreationID(id: string): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.get<RecreationData>({ id: id });
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async post(body: RecreationRequest): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.post<RecreationData>(body, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async put(body: RecreationRequest): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.put<RecreationData>(body, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async putDraft(body: RecreationRequest): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation_draft.put<RecreationData>(body, this.authRequired);
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async delete(): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.delete<RecreationData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }
}
