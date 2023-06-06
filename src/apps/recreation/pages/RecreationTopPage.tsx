import React from 'react';
import { RecreationCards } from '../organisms/RecreationCards';
import { RecreationTable } from '../organisms/RecreationTable';

const RecreationForm: React.FC = () => {
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

export default RecreationForm;
