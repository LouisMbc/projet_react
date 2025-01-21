import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import './LoginOut.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate(); // Initialisation du hook

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      login(username, password);
      navigate('/'); 
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div 
      className="container-fluid min-vh-100 d-flex align-items-center justify-content-center py-5 login-container"
    >
      <div className="row justify-content-center w-100">
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div 
            className="card border-0 login-card"
          >
            <div className="card-body p-5">
              <h3 
                className="card-title text-center mb-4 login-title"
              >
                📚 Connexion
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control form-control-lg border-0 shadow-sm login-input"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    className="form-control form-control-lg border-0 shadow-sm login-input"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 mb-3 login-button"
                >
                  Se connecter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  const { logout } = useAuth();

  return (
    <button onClick={logout} className="btn btn-outline-light">
      Se déconnecter
    </button>
  );
}

export { Login, Logout };
