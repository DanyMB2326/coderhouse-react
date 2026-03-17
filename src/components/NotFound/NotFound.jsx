import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="not-found">
    <div className="nf-emoji">🏰</div>
    <h1 className="nf-title">¡Página Mágica No Encontrada!</h1>
    <p className="nf-sub">
      Parece que te perdiste en el reino. Esta página no existe,
      pero el castillo principal siempre te espera.
    </p>
    <Link to="/" className="btn-primary">
      ✨ Volver al reino
    </Link>
  </div>
);

export default NotFound;