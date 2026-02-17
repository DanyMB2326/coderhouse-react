import React from 'react'
import { Container } from 'react-bootstrap'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <Container className="footer-min text-center">

        {/* Marca */}
        <span className="footer-title d-block fw-bold fs-5 mb-2">
          Mickey's Magic Brew
        </span>

        {/* Redes */}
        <div className="footer-socials d-flex justify-content-center gap-4 fs-4 mb-2">
          <FaInstagram />
          <FaFacebook />
          <FaWhatsapp />
        </div>

        {/* Copy */}
        <span className="footer-copy small">
          © {new Date().getFullYear()} Mickey's Magic Brew — Todos los derechos reservados
        </span>

      </Container>
    </footer>
  )
}

export default Footer


