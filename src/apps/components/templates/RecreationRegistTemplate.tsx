import React, { useState } from "react";
import axios from 'axios';
import Toast from "../../../utils/Toast";
import Label from "../../../core/components/atoms/Label";
import { Select } from "../../../core/components/atoms/Select";
import { Text, Textarea } from "../../../core/components/atoms/Input";
import { SubmitButton } from "../../../core/components/atoms/Button";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Note } from "../../../core/components/atoms/Markdown";

export const RecreationRegistTemplate: React.FC = () => {
  const [recTitleValue, setRecTitleValue] = useState('');
  const [youtubeUrlValue, setYoutubeUrlValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const clearForm = () => {
    setRecTitleValue('');
    setYoutubeUrlValue('');
    setMessageValue('');
  }

  const handleRecTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecTitleValue(e.target.value);
  };

  const handleYoutubeUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrlValue(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = 'https://api.topicpost.net/v1/contact';
    const data = {
      name: recTitleValue,
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
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
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
              value={recTitleValue}
              onChange={handleRecTitleChange}
            />
          </div>

          <div className="mb-6 grid grid-cols-3 gap-3">
            <div>
              <Label htmlFor="email" required>対象人数</Label>
              <Select
                id="email"
                className="bg-gray-50"
              >
                <option value="0">選択してください</option>
                <option value="1">1〜5人</option>
                <option value="2">5〜10人</option>
                <option value="3">10〜20人</option>
                <option value="4">20〜40人</option>
                <option value="5">人数に関係なし</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="email" required>対象年齢</Label>
              <Select
                id="email"
                className="bg-gray-50"
              >
                <option value="0">選択してください</option>
                <option value="1">幼児（6才以下）</option>
                <option value="2">児童（7〜12才）</option>
                <option value="3">低学年（7〜9才）</option>
                <option value="4">高学年（10〜12才）</option>
                <option value="5">生徒（13〜18歳）</option>
                <option value="6">年齢に関係なし</option>
              </Select>
            </div>
            <div>
              <Label htmlFor="email" required>所要時間</Label>
              <Select
                id="email"
                className="bg-gray-50"
              >
                <option value="0">選択してください</option>
                <option value="1">5分未満</option>
                <option value="2">5〜10分</option>
                <option value="3">10〜20分</option>
                <option value="4">20〜40分</option>
                <option value="5">40分以上</option>
              </Select>
            </div>
          </div>

          <div className="mb-6">
            <Label htmlFor="youtubeLink">動画を載せる場合はURLを貼り付けてください（YouTubeのみ対応）</Label>
            <Text
              id="youtubeLink"
              type="text"
              className="bg-gray-50"
              placeholder="動画のURLを貼ってください"
              required={true}
              value={youtubeUrlValue}
              onChange={handleYoutubeUrlChange}
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
            <div className="text-slate-400 text-right text-sm my-1">自動保存：2023/05/16 0:22.09</div>
          </div>
          <SubmitButton className="mr-2">下書きを保存</SubmitButton>
          <SubmitButton className="mr-2">投稿</SubmitButton>
        </form>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        {(!recTitleValue && !messageValue) && (
          <div className="flex mb-5 text-2xl">こちらにはプレビューが表示されます</div>
        )}
        <div className="prose">
          <style>
            {`
              .prose :where(code)::before,
              .prose :where(code)::after {
                content: "";
              }
              .prose ul {
                margin-top: 0;
                margin-bottom: 8px;
              }
            `}
          </style>

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, children, ...props }) => (
                <h1 className="font-bold mb-2" {...props}>
                  {children || ''}
                </h1>
              ),
              h2: ({ node, children, ...props }) => (
                <h2 className="m-0 font-bold mb-2" {...props}>
                  {children || ''}
                </h2>
              ),
              h3: ({ node, children, ...props }) => (
                <h3 className="m-0 font-bold mb-2" {...props}>
                  {children || ''}
                </h3>
              ),
              h4: ({ node, children, ...props }) => (
                <h4 className="m-0 font-bold mb-2" {...props}>
                  {children || ''}
                </h4>
              ),
              h5: ({ node, children, ...props }) => (
                <h5 className="m-0 mb-2" {...props}>
                  {children || ''}
                </h5>
              ),
              h6: ({ node, children, ...props }) => (
                <h6 className="m-0 mb-2" {...props}>
                  {children || ''}
                </h6>
              ),
              p: ({ node, ...props }) => (
                <p className="m-0 mb-1" {...props} />
              ),
              li: ({ node, children, ...props }) => (
                <li className="m-0 text-base" {...props} >
                  {children || ''}
                </li>
              ),
              a: ({ node, children, ...props }) => (
                <a className="text-blue-600 no-underline" {...props} >
                  {children || ''}
                </a>
              ),
              code: ({ node, inline, className, children, ...props }) => {
                // const match = /language-(\w+)/.exec(className || '')
                return inline ? (
                  <code className="bg-gray-200 text-blue-600 px-1 rounded" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-gray-800 text-gray-200 p-0 m-0 rounded" {...props}>
                    {children}
                  </pre>
                )
              },
              pre: ({ node, ...props }) => (
                <pre className="bg-gray-800 text-gray-200 px-3 mt-3 rounded" {...props} />
              ),
              div: ({ node, children }) => {
                const className = node.properties?.className;
                if (Array.isArray(className)) {
                  const stringClassName = className as string[];
                  if (stringClassName.includes('note')) {
                    const type = stringClassName.find((cls: string) => ['info', 'warn', 'alert'].includes(cls));
                    return <Note type={type as 'info' | 'warn' | 'alert'} className="mb-3">{children}</Note>
                  }
                }
                return <div>{children}</div>;
              },
              hr: ({ node, ...props }) => (
                <hr className="my-2" {...props} />
              ),
            }}
          >
            {"# "+recTitleValue+"\n"+messageValue.replace(/:::note (info|warn|alert)\n([\s\S]*?)\n:::/g, (_, type, content) =>
              `<div class="note ${type}">${content}</div>`
            )}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
