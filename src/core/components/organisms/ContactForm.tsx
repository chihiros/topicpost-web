import React, { useState } from 'react';
import axios from 'axios';
import Label from '../atoms/Label';
import { Text, Textarea } from '../atoms/Input';
import SubmitButton from '../atoms/Button/SubmitButton';
import Toast from '../../../utils/toast/Toast';

const ContactForm: React.FC = () => {
  const [nameValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

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
        setTextValue('');
        setEmailValue('');
        setMessageValue('');
      })
      .catch(error => {
        console.error(error);
        toast.error('送信に失敗しました');
      });
  };

  return (
    <div className="p-4 shadow-md bg-gray-50 rounded-lg">
      <div className="flex mb-5 text-3xl">お問い合わせ</div>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="name">お名前</Label>
          <Text
            id="name"
            type="text"
            className="bg-gray-50"
            placeholder="テスト太郎"
            required={true}
            value={nameValue}
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="email">連絡先</Label>
          <Text
            id="email"
            type="email"
            className="bg-gray-50"
            placeholder="contact@example.cpm"
            required={true}
            value={emailValue}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="message">お問い合わせ内容</Label>
          <Textarea
            id="message"
            className="bg-gray-50"
            placeholder="お問い合わせ内容を入力してください。"
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

export default ContactForm;
