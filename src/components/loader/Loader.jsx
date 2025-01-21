import React from 'react';

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="tech-loader">
        <div className="circle-container">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <div className="loading-text">Chargement en cours...</div>
      </div>
      <style>
        {`
          .loader-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(5px);
            z-index: 1000;
          }

          .tech-loader {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }

          .circle-container {
            display: flex;
            gap: 15px;
          }

          .circle {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #3498db;
            opacity: 0;
          }

          .circle-1 {
            animation: pulse 1.5s infinite ease-in-out;
          }

          .circle-2 {
            animation: pulse 1.5s infinite ease-in-out 0.25s;
          }

          .circle-3 {
            animation: pulse 1.5s infinite ease-in-out 0.5s;
          }

          .progress-bar {
            width: 200px;
            height: 4px;
            background: #e0e0e0;
            border-radius: 2px;
            overflow: hidden;
          }

          .progress-fill {
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #3498db, #2ecc71);
            animation: progress 2s infinite ease-in-out;
            transform-origin: left;
          }

          .loading-text {
            font-family: 'Courier New', monospace;
            color: #2c3e50;
            font-size: 14px;
            letter-spacing: 1px;
            animation: blink 1s infinite;
          }

          @keyframes pulse {
            0%, 100% {
              transform: scale(0.5);
              opacity: 0.3;
            }
            50% {
              transform: scale(1);
              opacity: 1;
            }
          }

          @keyframes progress {
            0% {
              transform: scaleX(0);
            }
            50% {
              transform: scaleX(1);
            }
            100% {
              transform: scaleX(0);
              transform-origin: right;
            }
          }

          @keyframes blink {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </div>
  );
};