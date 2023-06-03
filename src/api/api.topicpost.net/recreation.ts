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

export interface RecreationsData {
  recreations: RecreationData[];
  total_records: number;
};

export interface RecreationResponse extends Response<RecreationData> { }
export interface RecreationsResponse extends Response<RecreationsData> { }

interface RecreationMethods {
  get: () => Promise<RecreationsResponse>;
  getByRecreationID: () => Promise<RecreationResponse>;
  post: (body: RecreationRequest) => Promise<RecreationResponse>;
  put: (body: RecreationRequest) => Promise<RecreationResponse>;
  delete: () => Promise<RecreationResponse>;
}

export default class Recreation implements RecreationMethods {
  topicpost_recreation = new TopicPostAPI("/recreation");
  authRequired = true;

  async get(): Promise<RecreationsResponse> {
    const res = await this.topicpost_recreation.get<RecreationsData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }

  async getByRecreationID(): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.get<RecreationData>();
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

  async delete(): Promise<RecreationResponse> {
    const res = await this.topicpost_recreation.delete<RecreationData>();
    return {
      data: res.data,
      errors: res.errors,
      status: res.status,
    };
  }
}
