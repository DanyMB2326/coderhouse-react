import React from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom px-4 py-3">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Mickey's Magic Brew
        </Link>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4">

            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio del Reino</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/cafes">Elixeres</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/pasteleria">
                Pastelería Encantada
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/category/merch">
                Mercancía Mágica
              </Link>
            </li>

          </ul>
        </div>

        <CartWidget />

      </div>
    </nav>
  )
}

export default NavBar

