import React, { useState, useEffect } from 'react';
import { Loader } from '../../components/loader/Loader';
import './BookList.css';

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState({});

  useEffect(() => {
    fetch("https://www.googleapis.com/books/v1/volumes?q=Harry+Potter")
      .then(response => response.json())
      .then(data => {
        const formattedBooks = data.items.map(book => ({
          id: book.id,
          title: book.volumeInfo.title,
          author: book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Auteur inconnu",
          description: book.volumeInfo.description || "Aucune description disponible"
        }));
        setBooks(formattedBooks);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erreur :", error);
        setLoading(false);
      });
  }, []);

  const handleAddComment = (bookId, comment) => {
    setComments(prev => ({
      ...prev,
      [bookId]: [...(prev[bookId] || []), comment]
    }));
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container-fluid px-5">
      <h2 className="mb-4">Liste des Livres</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {books.map((book, index) => (
          <div 
            key={book.id} 
            className="col"
            style={{
              animation: `slideIn 0.5s ease-out ${index * 0.1}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
                <p className="card-text">{book.description}</p>
                
                <div className="comments-section mt-3">
                  <h6>Commentaires</h6>
                  {comments[book.id]?.map((comment, i) => (
                    <div key={i} className="alert alert-light">
                      {comment}
                    </div>
                  ))}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const comment = e.target.comment.value;
                      handleAddComment(book.id, comment);
                      e.target.reset();
                    }}
                    className="mt-2"
                  >
                    <div className="input-group">
                      <input
                        name="comment"
                        type="text"
                        className="form-control"
                        placeholder="Ajouter un commentaire"
                        required
                      />
                      <button type="submit" className="btn btn-primary">
                        Commenter
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};