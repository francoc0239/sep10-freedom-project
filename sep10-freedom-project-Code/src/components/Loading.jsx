// LoadingScreen.jsx
import React from 'react';

const Loading = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f8f9fa', // optional background
    }}>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;
