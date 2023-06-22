import React, { useState, useEffect } from "react";
import Label from "../../../core/components/atoms/Label";
import { Select } from "../../../core/components/atoms/Select";
import { Text, Textarea } from "../../../core/components/atoms/Input";
import { Button, SubmitButton } from "../../../core/components/atoms/Button";
import { MarkdownPreview } from "../../../core/components/atoms/Markdown";
import { RiTimerLine } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import getYouTubeID from "get-youtube-id";
import RecreationAPI, { RecreationRequest } from "../../../api/api.topicpost.net/recreation";
import { v4 as uuidv4 } from "uuid";
import { supabaseClient } from "../../../utils/supabase";

import { TagButton } from "../organisms/RecreationTagButton";
import { GetUserID } from "../../../utils/supabase";
import './youtube_frame.css';

const recreation_id = uuidv4();
let user_id = "";
GetUserID().then((res: string | undefined) => {
  if (res) {
    user_id = res;
  }
});

export const RecreationRegist: React.FC = () => {
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
  const [tagError, setTagError] = useState('');

  const targetNumberOptions: { [key: string]: string } = {
    "0": "選択してください",
    "1": "1〜5人",
    "2": "5〜10人",
    "3": "10〜20人",
    "4": "20〜40人",
    "5": "人数に関係なし"
  };

  const requiredTimeOptions: { [key: string]: string } = {
    "0": "選択してください",
    "1": "5分未満",
    "2": "5〜10分",
    "3": "10〜20分",
    "4": "20〜40分",
    "5": "40分以上"
  };

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

  const getIsCheckedList = () => {
    const isCheckedList = [];
    if (isChecked1) {
      isCheckedList.push(1);
    }
    if (isChecked2) {
      isCheckedList.push(2);
    }
    if (isChecked3) {
      isCheckedList.push(3);
    }
    if (isChecked4) {
      isCheckedList.push(4);
    }
    if (isChecked5) {
      isCheckedList.push(5);
    }
    if (isChecked6) {
      isCheckedList.push(6);
    }
    return isCheckedList;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isCheckedList = getIsCheckedList();
    console.log(isCheckedList.length);
    if (isCheckedList.length === 0) {
      setTagError('↑ 少なくとも1つは選択してください');
      return;
    }
    setTagError('');

    const api = new RecreationAPI();
    const request: RecreationRequest = {
      user_id: user_id,
      recreation_id: recreation_id,
      genre: isCheckedList,
      title: recTitleValue,
      content: messageValue,
      youtube_id: getYouTubeID(youtubeUrlValue),
      target_number: Number(targetNumber),
      required_time: Number(requiredTime),
    }


    //     // フォームの初期化
    //     clearForm();
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     toast.error('送信に失敗しました');
    //   });

    const res = api.post(request);
    console.log("res:", res);
  };

  // Set up local state for the dropped file
  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string[] | null>(null);

  const onDragEnter = (e: React.DragEvent<HTMLTextAreaElement>) => {
    // Prevent default behavior (Prevent file from being opened)
    e.preventDefault();
  };

  const onDrop = async (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();

    let uploadFilePath: string[] = [];
    if (e.dataTransfer.items) {
      setUploading(true);

      for (var i = 0; i < e.dataTransfer.items.length; i++) {
        setMessageValue(prevMessage => prevMessage + '\n![Uploading](...)');
        if (e.dataTransfer.items[i].kind === 'file') {
          const file = e.dataTransfer.items[i].getAsFile();
          if (!file) return;
          GetUserID().then(async (userID) => {
            if (userID) {
              const fileExtension = file.name.split(".").pop();
              const filePath = `${userID}/${uuidv4()}.${fileExtension}`;
              const { error } = await supabaseClient.storage
                .from('recreation')
                .upload(filePath, file);

              if (error) {
                console.error('Error uploading file: ', error);
              } else {
                uploadFilePath.push(filePath);
                const { data: { publicUrl } } = await supabaseClient.storage
                  .from('recreation')
                  .getPublicUrl(filePath);
                setMessageValue(prevMessage => prevMessage.replace(
                  '![Uploading](...)',
                  `![image](${publicUrl})`
                ));
              }
              setUploading(false);
            }
          });
        }
      }
    }
    setFileUrl(uploadFilePath);
  };

  const onPaste = async (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const items = e.clipboardData.items;
    let uploadFilePath: string[] = [];

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") === -1) continue;

      const file = items[i].getAsFile();
      if (!file) return;

      setUploading(true);
      setMessageValue(prevMessage => prevMessage + '\n![Uploading](...)');

      GetUserID().then(async (userID) => {
        if (userID) {
          const filePath = `${userID}/${uuidv4()}`;
          const { error } = await supabaseClient.storage
            .from('recreation')
            .upload(filePath, file);

          if (error) {
            console.error('Error uploading file: ', error);
          } else {
            uploadFilePath.push(filePath);
            const { data: { publicUrl } } = await supabaseClient.storage
              .from('recreation')
              .getPublicUrl(filePath);
            setMessageValue(prevMessage => prevMessage.replace(
              '![Uploading](...)',
              `![image](${publicUrl})`
            ));
          }
          setUploading(false);
        }
      });
    }
    setFileUrl(uploadFilePath);
  }

  useEffect(() => {
    // console.log("fileUrl:", fileUrl);
  }, [fileUrl]);

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex mb-5 text-3xl">レクリエーションの投稿</div>

        <div className="mb-4">
          {/* `アイスブレイク` `手遊び レク` `少人数 レク` `グループ レク` `静かにする レク` `レクダン` `その他のレク`  */}
          <Label required>どんな場面で使えるレクですか？（複数選択可）</Label>
          <TagButton id="check1" isChecked={isChecked1} setIsChecked={setIsChecked1}>
            アイスブレイク
          </TagButton>

          <TagButton id="check2" isChecked={isChecked2} setIsChecked={setIsChecked2}>
            手遊びレク
          </TagButton>

          <TagButton id="check3" isChecked={isChecked3} setIsChecked={setIsChecked3}>
            少人数レク
          </TagButton>

          <TagButton id="check4" isChecked={isChecked4} setIsChecked={setIsChecked4}>
            グループレク
          </TagButton>

          <TagButton id="check5" isChecked={isChecked5} setIsChecked={setIsChecked5}>
            静かにするレク
          </TagButton>

          <TagButton id="check6" isChecked={isChecked6} setIsChecked={setIsChecked6}>
            レクダン
          </TagButton>
          {tagError && <p className="text-orange-600">{tagError}</p>}
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
                {Object.keys(targetNumberOptions).map((key) => (
                  <option
                    key={key}
                    value={key}
                  >
                    {targetNumberOptions[key]}
                  </option>
                ))}
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
                {Object.keys(requiredTimeOptions).map((key) => (
                  <option
                    key={key}
                    value={key}
                  >
                    {requiredTimeOptions[key]}
                  </option>
                ))}
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
              value={youtubeUrlValue}
              onChange={handleYoutubeUrlChange}
            />
          </div>

          <div className="mb-3">
            <Label htmlFor="message" required>ルール説明</Label>
            <Textarea
              id="message"
              className={uploading ? "bg-gray-300" : "bg-gray-50"}
              rows={10}
              required={true}
              value={messageValue}
              onChange={handleMessageChange}
              onDragOver={onDragEnter}
              onDrop={onDrop}
              onPaste={onPaste}
              disabled={uploading}
            />
          </div>
          <div className="flex justify-between items-start">
            <div className="flex">
              <Button
                className="text-green-600 border border-green-600 hover:bg-green-600 hover:text-white mr-2"
              >一時保存</Button>
              <SubmitButton className="mr-2">投稿</SubmitButton>
            </div>
            <div className="text-slate-400 text-sm">自動保存：2023/05/16 0:22.09</div>
          </div>
        </form>

        {/* <div className="mb-2 mt-4 text-xl">画像をアップロード</div>
        <div className="h-60 bg-slate-400 rounded-lg"
          onDragOver={onDragEnter}
          onDrop={onDrop}
        >
        </div> */}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg overflow-auto break-words">
        {(!recTitleValue) && (
          <div className="flex mb-5 text-2xl">こちらにはプレビューが表示されます</div>
        )}
        <div className="mx-auto">
          {/* Title */}
          <MarkdownPreview>
            {"# " + recTitleValue + "\n"
              + "---\n"}
          </MarkdownPreview>

          <div className="text-sm">こんな場面で使えるレクです</div>
          <MarkdownPreview>
            {[
              isChecked1 ? "`アイスブレイク`" : ``,
              isChecked2 ? "`手遊びレク`" : ``,
              isChecked3 ? "`少人数レク`" : ``,
              isChecked4 ? "`グループレク`" : ``,
              isChecked5 ? "`静かにするレク`" : ``,
              isChecked6 ? "`レクダン`" : ``,
            ].filter(i => i !== '').join(' ')}
          </MarkdownPreview>

          {/* 対象人数・対象年齢・所要時間を表示する */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-4">
            <div className="border-b-2">
              <div className="text-sm pl-2 pb-2"><BsFillPeopleFill className="inline w-5 h-5" />：{
                targetNumber === "1" ? "1〜5人" :
                  targetNumber === "2" ? "5〜10人" :
                    targetNumber === "3" ? "10〜20人" :
                      targetNumber === "4" ? "20〜40人" :
                        targetNumber === "5" ? "人数に関係なし" : ""
              }</div>
            </div>
            <div className="border-b-2">
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
            <div className="mb-4 flex justify-center">
              <iframe
                className="screen"
                src={`https://www.youtube.com/embed/${getYouTubeID(youtubeUrlValue)}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Rule */}
          <MarkdownPreview>
            {messageValue}
          </MarkdownPreview>
          {!messageValue && (
            <div className="flex mb-5 text-xl">こちらにはプレビューが表示されます</div>
          )}
        </div>
      </div>
    </div>
  );
}
