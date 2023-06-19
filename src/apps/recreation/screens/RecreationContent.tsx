import React, { useEffect, useState } from "react";
import RecreationAPI, { RecreationResponse } from "../../../api/api.topicpost.net/recreation";
import { MarkdownPreview } from "../../../core/components/atoms/Markdown";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import './youtube_frame.css';

const RECREATION_GENRES: { [key: number]: string } = {
  1: "アイスブレイク",
  2: "手遊びレク",
  3: "少人数レク",
  4: "グループレク",
  5: "静かにするレク",
  6: "レクダン",
};

const TARGET_NUMBERS: { [key: number]: string } = {
  1: "1〜5人",
  2: "5〜10人",
  3: "10〜20人",
  4: "20〜40人",
  5: "人数に関係なし"
};

const REQUIRED_TIMES: { [key: number]: string } = {
  1: "5分未満",
  2: "5〜10分",
  3: "10〜20分",
  4: "20〜40分",
  5: "40分以上"
};

export const RecreationContent: React.FC = () => {
  const params = useParams<{ id: string }>();
  const [recreationContent, setRecreationContent] = useState<RecreationResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recreation = new RecreationAPI();
        const fetchedContent = await recreation.getByRecreationID(params.id);
        console.log("recreationContent", fetchedContent);
        setRecreationContent(fetchedContent);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [params.id]);

  const genreList = recreationContent?.data.genre.map((genre) => `\`${RECREATION_GENRES[genre]}\``).join('\n');

  return (
    <>
      <div className="p-6 bg-gray-50 rounded-lg overflow-auto break-words">
        <div className="mx-auto max-w-5xl">
          {/* Title */}
          <MarkdownPreview>
            {"# " + recreationContent?.data.title + "\n"
              + "---\n"}
          </MarkdownPreview>

          <div className="text-sm">こんな場面で使えるレクです</div>
          <MarkdownPreview>
            {genreList}
          </MarkdownPreview>

          {/* 対象人数・対象年齢・所要時間を表示する */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-4">
            <div className="border-b-2">
              <div className="text-sm pl-2 pb-2"><BsFillPeopleFill className="inline w-5 h-5" />：{
                TARGET_NUMBERS[recreationContent?.data.target_number!]
              }</div>
            </div>
            <div className="border-b-2">
              <div className="text-sm pl-2 pb-2"><RiTimerLine className="inline w-5 h-5" />：{
                REQUIRED_TIMES[recreationContent?.data.required_time!]
              }</div>
            </div>
          </div>

          {/* YouTube URL */}
          {recreationContent?.data.youtube_id && (
            <div className="mb-4 flex justify-center">
              <iframe
                className="screen"
                src={`https://www.youtube.com/embed/${recreationContent.data.youtube_id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Rule */}
          <MarkdownPreview>
            {recreationContent?.data.content}
          </MarkdownPreview>
        </div>
      </div>
    </>
  )
}
