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
  const [isCheckedList, setIsCheckedList] = useState([false, false, false, false, false, false]);
  const [tagError, setTagError] = useState('');
  const [autoSaveTimestamp, setAutoSaveTimestamp] = useState(0);

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

  const recreationGenre = [
    { id: 1, name: "アイスブレイク" },
    { id: 2, name: "手遊びレク" },
    { id: 3, name: "少人数レク" },
    { id: 4, name: "グループレク" },
    { id: 5, name: "静かにするレク" },
    { id: 6, name: "レクダン" },
  ];

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

  const getCheckedList = () => {
    const checkedList: number[] = [];
    for (let i = 0; i < isCheckedList.length; i++) {
      if (isCheckedList[i]) {
        checkedList.push(i + 1);
      }
    }
    return checkedList;
  };

  const getSaveTime = () => {
    if (autoSaveTimestamp === 0) {
      return undefined;
    }

    const date = new Date(autoSaveTimestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = ("0" + date.getHours()).slice(-2);
    const minute = ("0" + date.getMinutes()).slice(-2);
    const second = ("0" + date.getSeconds()).slice(-2);
    return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  }
    const api = new RecreationAPI();
    const request: RecreationRequest = {
      user_id: user_id,
      recreation_id: recreation_id,
      genre: getCheckedList(),
      title: recTitleValue,
      content: messageValue,
      youtube_id: getYouTubeID(youtubeUrlValue),
      target_number: Number(targetNumber),
      required_time: Number(requiredTime),
    }

    if (publish) {
      api.post(request).then((res: RecreationResponse) => {
        try {
          console.log("res:", res);
          // toast.success('送信が完了しました');
        } catch (err) {
          console.error(err);
          // toast.error('送信に失敗しました');
        }
      });
    } else {
      api.putDraft(request).then((res: RecreationResponse) => {
        try {
          console.log("res:", res);
          // toast.success('送信が完了しました');
        } catch (err) {
          console.error(err);
          // toast.error('送信に失敗しました');
        }
      });
    }

  const [lastInputChange, setLastInputChange] = useState(Date.now());

  useEffect(() => {
    setLastInputChange(Date.now());
  }, [recTitleValue, youtubeUrlValue, messageValue, targetNumber, requiredTime, isCheckedList]);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    for (let i = 0; i < isCheckedList.length; i++) {
      if (isCheckedList[i]) {
        setTagError('');
        break;
      } else {
        if (i === isCheckedList.length - 1) {
          setTagError('↑ 少なくとも1つは選択してください');
          return;
        }
        continue;
      }
    }

    saveRecreation(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      saveRecreation(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [lastInputChange, saveRecreation]);

  const [uploading, setUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string[] | null>(null);

  const onDragEnter = (e: React.DragEvent<HTMLTextAreaElement>) => {
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

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex mb-5 text-3xl">レクリエーションの投稿</div>

        <div className="mb-4">
          <Label required>どんな場面で使えるレクですか？（複数選択可）</Label>
          {recreationGenre.map((genre, index) => (
            <TagButton
              key={index}
              id={`check${index}`}
              isChecked={isCheckedList[index]}
              setIsChecked={
                (b: boolean) => {
                  const newList = [...isCheckedList];
                  newList[index] = b;
                  setIsCheckedList(newList);
                }
              }
            >
              {genre.name}
            </TagButton>
          ))}
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
                  <option key={key} value={key}>
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
                  <option key={key} value={key}>
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
            <div className="text-slate-400 text-sm">
              {getSaveTime() ? `自動保存：${getSaveTime()}` : ''}
            </div>
          </div>
        </form>
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
            {isCheckedList.map((isChecked, index) => (
              isChecked ? `\`${recreationGenre[index].name}\`` : ''
            )).filter(i => i !== '').join(' ')}
          </MarkdownPreview>

          {/* 対象人数・所要時間を表示する */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-4">
            <div className="border-b-2">
              <div className="text-sm pl-2 pb-2"><BsFillPeopleFill className="inline w-5 h-5" />：{
                targetNumber !== "0" ? targetNumberOptions[targetNumber] : ""
              }</div>
            </div>
            <div className="border-b-2">
              <div className="text-sm pl-2 pb-2"><RiTimerLine className="inline w-5 h-5" />：{
                requiredTime !== "0" ? requiredTimeOptions[requiredTime] : ""
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
              />
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
