import React from 'react';
import { BrowserRouter } from 'react-router';
import { Header } from './components/layouts/Header';
import { Footer } from './components/layouts/Footer';
import { AuthProvider } from './auth/AuthProvider.jsx';
import Router from './routes/Router';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="d-flex flex-column vh-100">
          <Header />
          <main className="flex-grow-1" style={{ paddingTop: '76px' }}>
            <Router />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;