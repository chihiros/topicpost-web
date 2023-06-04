import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecreationAPI, { RecreationResponse } from "../../../api/api.topicpost.net/recreation";

export const RecreationContentTemplate: React.FC = () => {
  const prams = useParams<{ id: string }>();
  console.log(prams.id);
  const id = prams.id;

  useEffect(() => {
    const recreation = new RecreationAPI();
    recreation.getByRecreationID(id).then((response: RecreationResponse) => {
      console.log("response", response);
    }).catch((error: any) => {
      console.error(error);
    });
    console.log("useEffect", id);
  }, []);

  return (
    <>
      <div className='mb-2 ml-2 text-2xl'>
        新着情報
      </div>
      <div className='flex justify-center'>
        <div className='w-1/2'>
          {id}
        </div>
      </div>
    </>
  );
}
