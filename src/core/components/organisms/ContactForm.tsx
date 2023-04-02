import React, { useState } from 'react';
import axios from 'axios';
import Label from '../atoms/Label';
import { Text, Textarea } from '../atoms/Input';
import SubmitButton from '../atoms/Button/SubmitButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm: React.FC = () => {
  const [nameValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = 'https://api.topicpost.net/v1/contact';
    const data = {
      name: nameValue,
      email: emailValue,
      content: messageValue,
    };

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
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <Label htmlFor="name">お名前</Label>
          <Text
            id="name"
            type="text"
            placeholder="テスト太郎"
            required={true}
            value={nameValue}
            onChange={e => setTextValue(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="email">連絡先</Label>
          <Text
            id="email"
            type="email"
            placeholder="contact@example.cpm"
            required={true}
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <Label htmlFor="message">お問い合わせ内容</Label>
          <Textarea
            id="message"
            placeholder="お問い合わせ内容を入力してください。"
            required={true}
            value={messageValue}
            onChange={e => setMessageValue(e.target.value)}
          />
        </div>
        <SubmitButton>送信</SubmitButton>
      </form>
    </div>
  );
}

export default ContactForm;
