import { Component } from 'react';

export class TopicPostAPI {
  private baseurl: string | undefined;

  constructor() {
    this.baseurl = process.env.TOPICPOST_API_URL;
  }

export class TopicPostAPI extends Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      // 環境変数からurlを取得する
      host: process.env.TOPICPOST_API_URL, // https://api.topicpost.net
    };
  }
}
