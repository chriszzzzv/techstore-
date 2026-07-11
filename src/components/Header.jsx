import '../css/Header.css';

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-icono">🖥️</span>
        <span className="logo-texto">TechStore Chile</span>
      </div>

      <input
        type="text"
        className="header-buscador"
        placeholder="Buscar productos..."
      />

      <div className="header-acciones">
        <button className="btn-sesion">Iniciar Sesión</button>
        <button className="btn-registro">Registrarse</button>

        <div className="header-carrito">
          🛒
          <span className="carrito-contador">{cartCount}</span>
        </div>

        <div className="header-redes">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="X">🐦</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
