import React from 'react';
import { NewCard } from "../atoms/Card";

const RecreationForm: React.FC = () => {
  return (
    <div className="text-2xl">
      <div className='mb-2 ml-2'>
        新着情報
      </div>
      <div className="flex overflow-x-auto gap-4">
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
        <NewCard />
      </div>

    </div>
  );
}

export default RecreationForm;
