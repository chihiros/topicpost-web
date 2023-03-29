import React from 'react';
import Breadcrumb from '../molecules/Breadcrumb/Breadcrumb';

const DiaryContent: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Breadcrumb
        breadcrumb={[
          { href: '/diary', context: '活動日記' },
        ]}
      />
    </div>
  );
}

export default DiaryContent;
