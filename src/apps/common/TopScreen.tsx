import React, { useEffect, useState } from "react";
import { RecreationCards } from "../recreation/organisms/RecreationCards";
import RecreationAPI, { RecreationsResponse } from "../../api/api.topicpost.net/recreation";

const Top: React.FC = () => {
  const [recreationsCard, setRecreationsCard] = useState<RecreationsResponse>();
  useEffect(() => {
    const recreation = new RecreationAPI();
    recreation.get(10, 0).then((response: RecreationsResponse) => {
      console.log(response);
      setRecreationsCard(response);
    }).catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <>
      <div className='mb-2 ml-2 text-2xl'>
        お知らせ
      </div>
      <div className="p-4 bg-gray-50 rounded-lg mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-base font-medium text-gray-900">
              お知らせのタイトル
            </p>
            <p className="mt-1 text-sm text-gray-500">
              お知らせの内容
            </p>
          </div>
        </div>
      </div>

      <div className='mb-2 ml-2 text-2xl'>
        レクリエーション
      </div>
      <RecreationCards
        data={recreationsCard}
        className="mb-6"
      />

      <div className='mb-2 ml-2 text-2xl'>
        活動日記
      </div>
      {/* ↓ このコンポートは今後変える */}
      <RecreationCards
        data={recreationsCard}
        className="mb-6"
      />
    </>
  );
}

export default Top;
