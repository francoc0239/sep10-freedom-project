import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fetchData();
  }, []);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightpink',
        zIndex: 9999,
        flexDirection: 'column',
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Loader animation */}
      <div style={{
        border: '8px solid #f3f3f3',
        borderTop: '8px solid #3498db',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        animation: 'spin 1s linear infinite',
      }} />

      {}
      <div style={{ marginTop: '20px', fontSize: '20px' }}>Loading...</div>

      {}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export {LoadingScreen}
