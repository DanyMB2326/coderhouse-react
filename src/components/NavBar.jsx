import React from 'react';
import CartWidget from './CartWidget';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center brand-magic" href="/">
            <span style={{ color: '#F9D616', fontWeight: '800', fontSize: '1.7rem', fontStyle:'italic' }}>
              Mickey's
            </span>
            <span style={{ color: '#ffffff', fontWeight: '400', fontSize: '1.5rem', marginLeft: '8px' }}>
              Magic Brew
            </span>
        </a>

        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
            <span style={{color:'white', fontSize:'1.5rem'}}>☰</span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link nav-link-magic" href="/">Inicio del Reino</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-magic" href="/cafes">Elixeres</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-magic" href="/pasteleria">Pastelería Encantada</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-magic" href="/merch">Mercancía Mágica</a>
            </li>
          </ul>
        </div>

        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
