import React, { useState } from "react";
import axios from 'axios';
import Toast from "../../../utils/Toast";
import Label from "../../../core/components/atoms/Label";
import { Text, Textarea } from "../../../core/components/atoms/Input";
import { SubmitButton } from "../../../core/components/atoms/Button";

export const RecreationRegistTemplate: React.FC = () => {
  const [nameValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const clearForm = () => {
    setTextValue('');
    setEmailValue('');
    setMessageValue('');
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = 'https://api.topicpost.net/v1/contact';
    const data = {
      name: nameValue,
      email: emailValue,
      content: messageValue,
    };

    const toast = new Toast();
    axios.post(url, data)
      .then(response => {
        console.log(response.data);
        toast.success('送信が完了しました');

        // フォームの初期化
        clearForm();
      })
      .catch(error => {
        console.error(error);
        toast.error('送信に失敗しました');
      });
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex mb-5 text-3xl">レクリエーションの投稿</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="name" required>レク名前</Label>
          <Text
            id="name"
            type="text"
            className="bg-gray-50"
            required={true}
            value={nameValue}
            onChange={handleTextChange}
          />
        </div>

        <div className="mb-6 grid grid-cols-3 gap-3">
          <div>
            <Label htmlFor="email" required>対象</Label>
            <Text
              id="email"
              type="email"
              className="bg-gray-50"
              required={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <Label htmlFor="email" required>対象</Label>
            <Text
              id="email"
              type="email"
              className="bg-gray-50"
              required={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
          <div>
            <Label htmlFor="email" required>所要時間</Label>
            <Text
              id="email"
              type="email"
              className="bg-gray-50"
              required={true}
              value={emailValue}
              onChange={handleEmailChange}
            />
          </div>
        </div>

        <div className="mb-6">
          <Label htmlFor="youtubeLink">動画を載せる場合はURLを貼り付けてください（YouTubeのみ対応）</Label>
          <Text
            id="name"
            type="text"
            className="bg-gray-50"
            placeholder="動画のURLを貼ってください"
            required={true}
            value={nameValue}
            onChange={handleTextChange}
          />
        </div>

        <div className="mb-3">
          <Label htmlFor="message" required>ルール説明</Label>
          <Textarea
            id="message"
            className="bg-gray-50"
            rows={10}
            required={true}
            value={messageValue}
            onChange={handleMessageChange}
          />
        </div>
        <SubmitButton>送信</SubmitButton>
      </form>
    </div>
  );
}
