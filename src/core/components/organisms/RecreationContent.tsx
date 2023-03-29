import React from 'react';
import Header from '../molecules/Header/Header';

const RecreationForm: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Header
        breadcrumb={[
          { href: '/recreation', label: 'レクリエーション' },
        ]}
      />
    </div>
  );
}

export default RecreationForm;
