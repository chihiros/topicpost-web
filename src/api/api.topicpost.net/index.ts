import { Component } from 'react';

interface Props {}

interface State {
  url: string | undefined;
}

export class TopicPostAPI extends Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      // 環境変数からurlを取得する
      url: process.env.TOPICPOST_API_URL, // https://api.topicpost.net
    };
  }
}
