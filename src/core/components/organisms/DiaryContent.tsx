import React from 'react';
import Header from '../molecules/Header/Header';

const DiaryContent: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Header
        breadcrumb={[
          { href: '/diary', label: '活動日記' },
        ]}
      />
    </div>
  );
}

export default DiaryContent;
