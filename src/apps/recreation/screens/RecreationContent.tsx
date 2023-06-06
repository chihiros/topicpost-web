import React, { useEffect, useState } from "react";
import RecreationAPI, { RecreationResponse } from "../../../api/api.topicpost.net/recreation";
import { MarkdownPreview } from "../../../core/components/atoms/Markdown"
import { BsFillPeopleFill } from "react-icons/bs";
import { RiTimerLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

export const RecreationContent: React.FC = () => {
  const prams = useParams<{ id: string }>();
  const id = prams.id;

  const [recreationContent, setRecreationContent] = useState<RecreationResponse>();
  useEffect(() => {
    const recreation = new RecreationAPI();
    recreation.getByRecreationID(id).then((recreationContent: RecreationResponse) => {
      console.log("recreationContent", recreationContent);
      setRecreationContent(recreationContent);
    }).catch((error: any) => {
      console.error(error);
    });
    console.log("useEffect", id);
  }, [id]);

  const GetRecreationGenre = (id: number): string => {
    switch (id) {
      case 1:
        return "アイスブレイク"
      case 2:
        return "手遊びレク"
      case 3:
        return "少人数レク"
      case 4:
        return "グループレク"
      case 5:
        return "静かにするレク"
      case 6:
        return "レクダン"
    }
    return ""
  }

  return (
    <>
      <div className="p-4 bg-gray-50 rounded-lg overflow-auto break-words">
        <div className="mx-auto">
          {/* Title */}
          <MarkdownPreview>
            {"# " + recreationContent?.data.title + "\n"
              + "---\n"}
          </MarkdownPreview>

          <div className="text-sm">こんな場面で使えるレクです</div>
          <MarkdownPreview>
            {recreationContent?.data.genre.map((genre): string => {
              return `\`${GetRecreationGenre(genre)}\``;
            }).join('\n')}
          </MarkdownPreview>

          {/* 対象人数・対象年齢・所要時間を表示する */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-4">
            <div className="border-b-2">
              {/* [1:"1〜5人", 2:"5〜10人", 3:"10〜20人", 4:"20〜40人", 5:"人数に関係なし"] */}
              {/* <div className="text-sm">対象人数：{targetNumber}</div> */}
              <div className="text-sm pl-2 pb-2"><BsFillPeopleFill className="inline w-5 h-5" />：{
                recreationContent?.data.target_number === 1 ? "1〜5人" :
                  recreationContent?.data.target_number === 2 ? "5〜10人" :
                    recreationContent?.data.target_number === 3 ? "10〜20人" :
                      recreationContent?.data.target_number === 4 ? "20〜40人" :
                        recreationContent?.data.target_number === 5 ? "人数に関係なし" : ""
              }</div>
            </div>
            <div className="border-b-2">
              {/* [1:"5分未満", 2:"5〜10分", 3:"10〜20分", 4:"20〜40分", 5:"40分以上"]   */}
              {/* <div className="text-sm">所要時間：{requiredTime}</div> */}
              <div className="text-sm pl-2 pb-2"><RiTimerLine className="inline w-5 h-5" />：{
                recreationContent?.data.required_time === 1 ? "5分未満" :
                  recreationContent?.data.required_time === 2 ? "5〜10分" :
                    recreationContent?.data.required_time === 3 ? "10〜20分" :
                      recreationContent?.data.required_time === 4 ? "20〜40分" :
                        recreationContent?.data.required_time === 5 ? "40分以上" : ""
              }</div>
            </div>
          </div>

          {/* YouTube URL */}
          {recreationContent?.data.youtube_id && (
            <div className="mb-4">
              <div
                className="youtube-container"
                dangerouslySetInnerHTML={{
                  __html: `<iframe width="100%" height="240" src="https://www.youtube.com/embed/${recreationContent.data.youtube_id}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                }}
              />
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
