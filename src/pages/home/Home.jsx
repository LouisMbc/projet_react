import React from 'react';
import { Link } from 'react-router';

export const Home = () => {
  return (
    <div className="container-fluid px-5 py-4 w-100">
      <div className="jumbotron text-center p-5 rounded w-100 mb-5" 
        style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
        <h1 className="display-4 fw-bold mb-4" 
          style={{
            color: '#2c3e50',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
          📚 Bienvenue sur Critiques de livres
        </h1>
        <p className="lead fs-3 text-muted">
          Découvrez et partagez des critiques de vos livres préférés
        </p>
        <hr className="my-4 opacity-25" />
      </div>

      <div id="bookCarousel" className="carousel slide mb-5 position-relative" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#bookCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#bookCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#bookCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#bookCarousel" data-bs-slide-to="3"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66" className="d-block w-100" alt="Bibliothèque" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explorez notre bibliothèque</h5>
              <p>Des milliers de livres vous attendent</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8" className="d-block w-100" alt="Lecture" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Partagez vos lectures</h5>
              <p>Donnez votre avis sur vos lectures</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570" className="d-block w-100" alt="Études" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Découvrez de nouveaux horizons</h5>
              <p>Élargissez vos horizons littéraires</p>
            </div>
          </div>
          
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" className="d-block w-100" alt="Communauté" style={{height: '500px', objectFit: 'cover'}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Rejoignez notre communauté</h5>
              <p>Échangez avec d'autres passionnés</p>
            </div>
          </div>
        </div>

        <div className="position-absolute top-50 start-50 translate-middle z-index-2 text-center">
          <Link 
            to="/login" 
            className="btn btn-primary btn-lg fw-bold px-4 py-3 rounded-pill"
            style={{
              backgroundColor: 'rgba(180, 207, 247, 0.31)',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Connectez-vous pour voir nos livres 📚
          </Link>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
};