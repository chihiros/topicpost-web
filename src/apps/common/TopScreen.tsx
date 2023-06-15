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
        レクリエーション
      </div>
      <RecreationCards
        data={recreationsCard}
      />

      <div className='mb-2 ml-2 text-2xl'>
        活動日記
      </div>
      {/* ↓ このコンポートは今後変える */}
      <RecreationCards
        data={recreationsCard}
      />
    </>
  );
}

export default Top;
