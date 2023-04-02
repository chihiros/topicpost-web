import React, { useState } from 'react';
import axios from 'axios';
import InputText from '../molecules/Input/InputText';
import InputTextarea from '../molecules/Input/InputTextarea';
import SubmitButton from '../atoms/Button/SubmitButton';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <InputText
            id="name"
            type="text"
            label="お名前"
            placeholder="テスト太郎"
            required={true}
            value={nameValue}
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-6">
          <InputText
            id="email"
            type="email"
            label="連絡先"
            placeholder="contact@example.com"
            required={true}
            value={emailValue}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <InputTextarea
            id="message"
            label="お問い合わせ内容"
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
