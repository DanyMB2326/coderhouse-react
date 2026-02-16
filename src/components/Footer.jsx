import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-min">

        {/* Marca */}
        <span className="footer-title">
          Mickey's Magic Brew
        </span>

        {/* Redes */}
        <div className="footer-socials">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>

        {/* Copy */}
        <span className="footer-copy">
          © {new Date().getFullYear()} Mickey's Magic Brew — Todos los derechos reservados
        </span>

      </Container>
    </footer>
  )
}

export default Footer

