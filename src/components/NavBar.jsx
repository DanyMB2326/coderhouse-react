import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  const getNavClass = ({ isActive }) =>
    `nav-link nav-link-magic ${isActive ? 'active fw-bold' : ''}`

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex align-items-center brand-magic" to="/">
          <span style={{ color: '#F9D616', fontWeight: '800', fontSize: '1.7rem', fontStyle: 'italic' }}>
            Mickey&apos;s
          </span>
          <span style={{ color: '#ffffff', fontWeight: '400', fontSize: '1.5rem', marginLeft: '8px' }}>
            Magic Brew
          </span>
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span style={{ color: 'white', fontSize: '1.5rem' }}>☰</span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink className={getNavClass} to="/">Catálogo</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="/category/cafes">Cafés</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="/category/pasteleria">Pastelería</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getNavClass} to="/category/merch">Merch</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
