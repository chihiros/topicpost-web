import React from 'react';
import Breadcrumb from '../molecules/Breadcrumb/Breadcrumb';

const RecreationForm: React.FC = () => {
  return (
    <div className="p-4 sm:ml-64">
      <Breadcrumb
        breadcrumb={[
          { href: '/recreation', label: 'レクリエーション' },
        ]}
      />
    </div>
  );
}

export default RecreationForm;
