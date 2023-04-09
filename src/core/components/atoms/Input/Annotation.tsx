import React from 'react';

type AnnotationProps = {
  children: React.ReactNode;
};

const Annotation: React.FC<AnnotationProps> = ({ children }) => {
  return (
    <div className="text-gray-500 text-sm mt-2">{children}</div>
  );
};

export default Annotation;
