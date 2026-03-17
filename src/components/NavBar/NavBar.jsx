import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const CATEGORIES = [
  { id: 'elixires', label: 'Elixires' },
  { id: 'pasteleria', label: 'Pastelería Encantada' },
  { id: 'mercancia', label: 'Mercancía Mágica' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleCategoryClick = (id) => {
    navigate(`/category/${id}`);
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-text-magic">Mickey's </span>
          <span className="logo-text-plain"> Magic Brew</span>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar-nav">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Inicio del Reino
          </NavLink>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className="nav-link"
              onClick={() => handleCategoryClick(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="navbar-right">
          <CartWidget />
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
            <span className={`ham-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" end className="mobile-link" onClick={() => setMenuOpen(false)}>
          Inicio del Reino
        </NavLink>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="mobile-link"
            onClick={() => handleCategoryClick(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default NavBar;


