import React, { useEffect, useState } from 'react';
import { RecreationCards } from '../organisms/RecreationCards';
import { RecreationTable } from '../organisms/RecreationTable';
import RecreationAPI, { RecreationsResponse } from '../../../api/api.topicpost.net/recreation';

export const RecreationTop: React.FC = () => {
  const [recreations, setRecreations] = useState<RecreationsResponse>();
  const [recreationsCard, setRecreationsCard] = useState<RecreationsResponse>();
  const [recreation_records, setRecreationRecords] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const recreation = new RecreationAPI();
    const limit = 10;
    const offset = limit * (currentPage - 1);
    recreation.get(limit, offset).then((response: RecreationsResponse) => {
      console.log(response);
      setRecreations(response);
      setRecreationRecords(response.data.total_records);
    }).catch((error) => {
      console.log(error);
    });

    const recreation2 = new RecreationAPI();
    recreation2.get(10, 0).then((response: RecreationsResponse) => {
      console.log(response);
      setRecreationsCard(response);
    }).catch((error) => {
      console.log(error);
    });
  }, [currentPage])

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
        新着情報
      </div>
      <RecreationCards
        data={recreationsCard}
      />

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
