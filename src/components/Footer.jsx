import '../css/Footer.css';

const garantias = [
  { icono: '💳', texto: 'Hasta 12 cuotas sin interés' },
  { icono: '📦', texto: 'Despachos a todo Chile' },
  { icono: '🔄', texto: 'Cambios y devoluciones' },
  { icono: '✅', texto: 'Calidad garantizada' }
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-garantias">
        {garantias.map((garantia) => (
          <div key={garantia.texto} className="garantia-item">
            <span className="garantia-icono">{garantia.icono}</span>
            <span>{garantia.texto}</span>
          </div>
        ))}
      </div>

      <div className="footer-info">
        <div className="footer-columna">
          <h4>TechStore Chile SpA</h4>
          <p>Av. Providencia 1234, Santiago, Chile</p>
        </div>
        <div className="footer-columna">
          <h4>Contacto</h4>
          <p>contacto@techstore.cl</p>
          <p>+56 2 2345 6789</p>
        </div>
        <div className="footer-columna">
          <h4>Síguenos</h4>
          <div className="footer-redes">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="X">🐦</a>
          </div>
        </div>
      </div>

      <p className="footer-derechos">
        © 2026 TechStore Chile — Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;

