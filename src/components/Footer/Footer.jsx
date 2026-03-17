import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        {/* Logo y descripción */}
        <div className="footer-brand">
          <p className="footer-logo">
            <span className="footer-logo-magic">Mickey's</span>
            <span className="footer-logo-plain"> Magic Brew</span>
          </p>
          <p className="footer-tagline">
            Donde cada sorbo tiene magia ✨
          </p>
        </div>

        {/* Links de categorías */}
        <div className="footer-links">
          <h4 className="footer-heading">Menú</h4>
          <ul>
            <li><a href="/category/elixires">Elixires</a></li>
            <li><a href="/category/pasteleria">Pastelería Encantada</a></li>
            <li><a href="/category/mercancia">Mercancía Mágica</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="footer-links">
          <h4 className="footer-heading">Contacto</h4>
          <ul>
            <li>📍 Castillo de Cenicienta, CDMX</li>
            <li>📞 +52 55 1234 5678</li>
            <li>✉️ hola@mickeysmagicbrew.mx</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-social-wrap">
          <h4 className="footer-heading">¡Síguenos!</h4>
          <div className="footer-social">

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/5215512345678"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="social-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Mickey's Magic Brew. Todos los derechos reservados.</p>
          <p>Hecho con ✨ y mucho café mágico</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;