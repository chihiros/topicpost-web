import React from 'react';
import Header from '../molecules/Header/Header';
import InputText from '../molecules/Input/InputText';
import InputTextarea from '../molecules/Input/InputTextarea';
import SubmitButton from '../atoms/Button/SubmitButton';

const ContactForm: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Header
        breadcrumb={[
          { href: '/contact', label: 'お問い合わせ' },
        ]}
      />

      <div className="p-4 shadow-md bg-gray-50 rounded-lg">
        <div className="flex mb-5 text-3xl">お問い合わせ</div>
        <form>
          <div className="mb-6">
            <InputText
              id="name"
              type="text"
              label="お名前"
              placeholder="テスト太郎"
              required={true} />
          </div>
          <div className="mb-6">
            <InputText
              id="email"
              type="email"
              label="連絡先"
              placeholder="contact@example.com"
              required={true} />
          </div>
          <div className="mb-3">
            <InputTextarea
              id="message"
              label="お問い合わせ内容"
              placeholder="お問い合わせ内容を入力してください。"
              required={true} />
          </div>
          <SubmitButton>送信</SubmitButton>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
