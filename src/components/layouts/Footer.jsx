import React from 'react';
import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container-fluid px-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h5 className="mb-3 text-primary">📚 Critiques de Livres</h5>
            <p className="mb-3">
              Votre plateforme de référence pour découvrir, partager et commenter vos lectures préférées.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Liens Rapides</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-white text-decoration-none hover-link">Accueil</Link>
              </li>
              <li className="mb-2">
                <Link to="/books" className="text-white text-decoration-none hover-link">Livres</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-white text-decoration-none hover-link">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-12 col-md-4">
            <h5 className="mb-3">Newsletter</h5>
            <p className="mb-3">Inscrivez-vous pour recevoir nos dernières critiques</p>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="votre@email.com"
                aria-label="Adresse email"
              />
              <button className="btn btn-primary" type="button">S'inscrire</button>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2025 Critiques de Livres. Tous droits réservés.</p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">Politique de confidentialité</a>
              </li>
              <li className="list-inline-item mx-3">|</li>
              <li className="list-inline-item">
                <a href="#" className="text-white text-decoration-none">Conditions d'utilisation</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};