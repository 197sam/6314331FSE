import React from 'react';

const DetailsColumn = ({ title, children }) => {
  return (
    <div style={{
      borderLeft: '3px solid green',
      padding: '10px',
      flex: 1,
      marginRight: '10px'
    }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default DetailsColumn;
