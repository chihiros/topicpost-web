import React, { useEffect, useState } from 'react';
import { RecreationCards } from '../organisms/RecreationCards';
import { RecreationTable, RecreationTableProps } from '../organisms/RecreationTable';
import { useParams } from 'react-router-dom';
import RecreationAPI, { RecreationResponse } from '../../../api/api.topicpost.net/recreation';

export const RecreationTopTemplate: React.FC = () => {
  return (
    <>
      <div className='mb-2 ml-2 text-2xl'>
        新着情報
      </div>
      <RecreationCards />

      <div className='mt-6 mb-2 ml-2 text-2xl flex justify-between'>
        一覧
      </div>
      <RecreationTable />
    </>
  );
}
