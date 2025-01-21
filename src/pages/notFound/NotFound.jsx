import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
//import './NotFound.css';

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container-fluid px-5 py-4 w-100">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Page non trouvée. Redirection vers l'accueil dans 3 secondes...</p>
      </div>
    </div>
  );
};