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
import { RiTimerLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import getYouTubeID from "get-youtube-id";

export const RecreationRegistTemplate: React.FC = () => {
  const [recTitleValue, setRecTitleValue] = useState('');
  const [youtubeUrlValue, setYoutubeUrlValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [targetNumber, setTargetNumber] = useState('');
  const [requiredTime, setRequiredTime] = useState('');
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);

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

  const handleTargetNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetNumber(e.target.value);
  };

  const handleRequiredTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRequiredTime(e.target.value);
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

        <div className="mb-4">
          <style>
            {`
              #button {
                  user-select: none;
              }
            `}
          </style>

          {/* `アイスブレイク` `手遊び レク` `少人数 レク` `グループ レク` `静かにする レク` `レクダン` `その他のレク`  */}
          <Label required>どんな場面で使えるレクですか？（複数選択可）</Label>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check1"
              hidden
              onChange={() => setIsChecked1(!isChecked1)} />
            <label
              htmlFor="check1"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked1 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              アイスブレイク</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check2"
              hidden
              onChange={() => setIsChecked2(!isChecked2)} />
            <label
              htmlFor="check2"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked2 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              手遊びレク</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check3"
              hidden
              onChange={() => setIsChecked3(!isChecked3)} />
            <label
              htmlFor="check3"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked3 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              少人数レク</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check4"
              hidden
              onChange={() => setIsChecked4(!isChecked4)} />
            <label
              htmlFor="check4"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked4 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              グループレク</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check5"
              hidden
              onChange={() => setIsChecked5(!isChecked5)} />
            <label
              htmlFor="check5"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked5 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              静かにするレク</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check6"
              hidden
              onChange={() => setIsChecked6(!isChecked6)} />
            <label
              htmlFor="check6"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked6 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              レクダン</label>
          </div>
          <div className="mr-1 mb-1 inline-block">
            <input
              type="checkbox"
              id="check7"
              hidden
              onChange={() => setIsChecked7(!isChecked7)} />
            <label
              htmlFor="check7"
              id="button"
              className={
                `p-1 rounded-lg text-xs border border-gray-500
              ${isChecked7 ?
                  'bg-cyan-400 text-slate-700' : 'bg-slate-200 text-slate-400'
                }`}
            >
              その他のレク</label>
          </div>
        </div>

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

          <div className="mb-6 grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="email" required>対象人数</Label>
              <Select
                id="targetNumber"
                className="bg-gray-50"
                value={targetNumber}
                onChange={handleTargetNumberChange}
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
              <Label htmlFor="email" required>所要時間</Label>
              <Select
                id="requiredTime"
                className="bg-gray-50"
                value={requiredTime}
                onChange={handleRequiredTimeChange}
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
            {/* <div className="text-slate-400 text-right text-sm my-1">自動保存：2023/05/16 0:22.09</div> */}
          </div>
          {/* <SuccessButton className="mr-2">下書きを保存</SuccessButton> */}
          <SubmitButton className="mr-2">投稿</SubmitButton>
        </form>
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        {(!recTitleValue && !messageValue) && (
          <div className="flex mb-5 text-2xl">こちらにはプレビューが表示されます</div>
        )}
        <div className="prose mx-auto">
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

          {/* Title */}
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ node, children, ...props }) => (
                <h1 className="font-bold mb-2" {...props}>
                  {children || ''}
                </h1>
              ),
              hr: ({ node, ...props }) => (
                <hr className="my-2" {...props} />
              ),
            }}
          >
            {"# " + recTitleValue + "\n"
              + "---\n"}
          </ReactMarkdown>

          <div className="text-sm">こんな場面で使えるレクです</div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                // const match = /language-(\w+)/.exec(className || '')
                return inline ? (
                  <code className="bg-gray-200 text-blue-600 px-1 rounded text-sm inline-block" {...props}>
                    {children}
                  </code>
                ) : (
                  <pre className="bg-gray-800 text-gray-200 p-0 m-0 rounded" {...props}>
                    {children}
                  </pre>
                )
              },
              p: ({ node, ...props }) => (
                <p className="m-0 mb-1" {...props} />
              ),
            }}
          >
            {[
              isChecked1 ? "`アイスブレイク`" : ``,
              isChecked2 ? "`手遊びレク`" : ``,
              isChecked3 ? "`少人数レク`" : ``,
              isChecked4 ? "`グループレク`" : ``,
              isChecked5 ? "`静かにするレク`" : ``,
              isChecked6 ? "`レクダン`" : ``,
              isChecked7 ? "`その他のレク`" : ``
            ].filter(i => i !== '').join(' ')}
          </ReactMarkdown>

          {/* 対象人数・対象年齢・所要時間を表示する */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-4">
            <div className="border-b-2">
              {/* [1:"1〜5人", 2:"5〜10人", 3:"10〜20人", 4:"20〜40人", 5:"人数に関係なし"] */}
              {/* <div className="text-sm">対象人数：{targetNumber}</div> */}
              <div className="text-sm pl-2 pb-2"><BsFillPeopleFill className="inline w-5 h-5" />：{
                targetNumber === "1" ? "1〜5人" :
                  targetNumber === "2" ? "5〜10人" :
                    targetNumber === "3" ? "10〜20人" :
                      targetNumber === "4" ? "20〜40人" :
                        targetNumber === "5" ? "人数に関係なし" : ""
              }</div>
            </div>
            <div className="border-b-2">
              {/* [1:"5分未満", 2:"5〜10分", 3:"10〜20分", 4:"20〜40分", 5:"40分以上"]   */}
              {/* <div className="text-sm">所要時間：{requiredTime}</div> */}
              <div className="text-sm pl-2 pb-2"><RiTimerLine className="inline w-5 h-5" />：{
                requiredTime === "1" ? "5分未満" :
                  requiredTime === "2" ? "5〜10分" :
                    requiredTime === "3" ? "10〜20分" :
                      requiredTime === "4" ? "20〜40分" :
                        requiredTime === "5" ? "40分以上" : ""
              }</div>
            </div>
          </div>

          {/* YouTube URL */}
          {youtubeUrlValue && (
            <div className="mb-4">
              <div
                className="youtube-container"
                dangerouslySetInnerHTML={{
                  __html: `<iframe width="100%" height="315" src="https://www.youtube.com/embed/${getYouTubeID(youtubeUrlValue)}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                }}
              />
            </div>
          )}

          {/* Rule */}
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
            {messageValue.replace(/:::note (info|warn|alert)\n([\s\S]*?)\n:::/g, (_, type, content) =>
              `<div class="note ${type}">${content}</div>`
            )}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}