import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../auth/AuthProvider.jsx';
import { Logout } from '../../auth/LoginOut.jsx';
import './Header.css';

export const Header = () => {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed-top bg-dark text-white ${scrolled ? 'shadow-lg navbar-scrolled' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-dark py-2">
        <div className="container-fluid px-5">
          <Link to="/" className="navbar-brand fs-3 fw-bold">
            <span className="text-primary">📚</span> Critiques de livres
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link px-3 nav-hover">Accueil</Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link to="/books" className="nav-link px-3 nav-hover">Livres</Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/contact" className="nav-link px-3 nav-hover">Contact</Link>
              </li>
            </ul>
            {user ? (
              <Logout />
            ) : (
              <Link 
                to="/login"
                className="btn btn-outline-primary px-4 rounded-pill"
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};