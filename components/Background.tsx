import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ backgroundColor: '#000000' }} />
  );
};

export default Background;