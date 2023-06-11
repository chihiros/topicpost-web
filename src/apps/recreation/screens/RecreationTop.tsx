import React, { useEffect, useState } from 'react';
import { RecreationCards } from '../organisms/RecreationCards';
import { RecreationTable } from '../organisms/RecreationTable';
import RecreationAPI, { RecreationsResponse } from '../../../api/api.topicpost.net/recreation';

export const RecreationTop: React.FC = () => {
  const [recreations, setRecreations] = useState<RecreationsResponse>();
  const [recreation_records, setRecreationRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const recreation = new RecreationAPI();
    // recreation.get(currentPage).then((response: RecreationsResponse) => {
    const limit = 10;
    const offset = limit * (currentPage - 1);
    recreation.get(limit, offset).then((response: RecreationsResponse) => {
      console.log(response);
      setRecreations(response);
      setRecreationRecords(response.data.total_records);
    }).catch((error) => {
      console.log(error);
    });
  }, [currentPage])

  return (
    <>
      <div className='mb-2 ml-2 text-2xl'>
        新着情報
      </div>
      <RecreationCards />

      <div className='mt-6 mb-2 ml-2 text-2xl flex justify-between'>
        一覧
      </div>
      <RecreationTable
        data={recreations}
        records={recreation_records}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
