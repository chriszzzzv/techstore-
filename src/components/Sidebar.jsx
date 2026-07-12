import '../css/Sidebar.css';

const beneficios = [
  { icono: '🚚', titulo: 'Envíos rápidos', descripcion: 'Recibe tu compra en 24-48 horas en todo Chile' },
  { icono: '🔒', titulo: 'Pago seguro', descripcion: 'Transacciones protegidas con encriptación' },
  { icono: '🛡️', titulo: 'Garantía', descripcion: 'Todos nuestros productos con garantía de 12 meses' },
  { icono: '🎧', titulo: 'Soporte', descripcion: 'Atención al cliente de lunes a sábado' }
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-titulo">¿Por qué comprar con nosotros?</h3>
      {beneficios.map((beneficio) => (
        <div key={beneficio.titulo} className="sidebar-item">
          <span className="sidebar-icono">{beneficio.icono}</span>
          <div>
            <h4 className="sidebar-item-titulo">{beneficio.titulo}</h4>
            <p className="sidebar-item-texto">{beneficio.descripcion}</p>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
