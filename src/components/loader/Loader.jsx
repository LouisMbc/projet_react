import React from 'react';

export const Loader = () => {
  return (
    <div style={{
      position: 'absolute',
      top: '30%',
      left: '40%',
      transform: 'rotate(-15deg)',
      backgroundColor: '#ff00ff',
      padding: '20px',
      border: '5px dashed yellow',
      animation: 'spin 3s linear infinite',
      boxShadow: '0 0 20px red',
      fontFamily: 'Comic Sans MS',
      fontSize: '24px',
      color: 'lime',
      zIndex: 9999,
    }}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(-15deg) scale(1); }
            25% { transform: rotate(15deg) scale(1.2); }
            50% { transform: rotate(-15deg) scale(0.8); }
            75% { transform: rotate(15deg) scale(1.4); }
            100% { transform: rotate(-15deg) scale(1); }
          }
        `}
      </style>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px'
      }}>
        <div>🔄 CHARGEMENT 🔄</div>
        <div style={{
          width: '50px',
          height: '50px',
          border: '8px dotted orange',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite reverse'
        }}></div>
        <marquee style={{ color: 'cyan' }}>Veuillez patienter...</marquee>
      </div>
    </div>
  );
};