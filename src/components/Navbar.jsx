import '../css/Navbar.css';

const enlaces = ['Inicio', 'Productos', 'Ofertas', 'Nosotros', 'Contacto'];

function Navbar() {
return (
    <nav className="navbar">
    <ul className="navbar-lista">
        {enlaces.map((enlace) => (
        <li key={enlace} className="navbar-item">
            <a href="#" className="navbar-enlace">{enlace}</a>
        </li>
        ))}
    </ul>
    </nav>
);
}

export default Navbar;
