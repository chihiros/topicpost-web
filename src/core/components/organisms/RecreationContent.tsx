import React, { useState } from 'react';
import axios from 'axios';
import Header from '../molecules/Header/Header';

const ReacreationForm: React.FC = () => {
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

export default ReacreationForm;
