import { useAuth } from "./AuthProvider";
import { Login } from "./LoginOut";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  return user ? (
    children
  ) : (
    <div className="container mt-5">
      <div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Accès refusé</h4>
        <p>Vous devez vous connecter pour accéder à cette page.</p>
      </div>
      <Login />
    </div>
  );
}
