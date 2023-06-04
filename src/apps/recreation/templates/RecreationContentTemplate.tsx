import React from "react";
import { useParams } from "react-router-dom";

export const RecreationContentTemplate: React.FC = () => {
  const prams = useParams<{ id: string }>();
  console.log(prams.id);

  const id = prams.id;

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
