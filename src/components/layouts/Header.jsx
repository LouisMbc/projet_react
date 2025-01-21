import React from 'react';
import { Link } from 'react-router';
import { useAuth } from '../../auth/AuthProvider.jsx';
import { Logout } from '../../auth/LoginOut.jsx';

export const Header = () => {
  const { user } = useAuth();

  return (
    <header className="bg-dark text-white">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid px-5">
          <Link to="/" className="navbar-brand">Critiques de livres</Link>
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
                <Link to="/" className="nav-link">Accueil</Link>
              </li>
              {user && (
                <li className="nav-item">
                  <Link to="/books" className="nav-link">Livres</Link>
                </li>
              )}
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            {user ? (
              <Logout />
            ) : (
              <Link 
                to="/login"
                className="btn btn-outline-light"
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