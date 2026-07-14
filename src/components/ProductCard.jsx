import '../css/ProductCard.css';
import { getImageUrl } from '../utils/getImageUrl';

function ProductCard({ producto, onAgregar }) {
  const estrellas = '★'.repeat(producto.valoracion) + '☆'.repeat(5 - producto.valoracion);

  return (
    <div className="card">
    <img src={getImageUrl(producto.imagen)} alt={producto.nombre} className="card-imagen" />
    <h3 className="card-nombre">{producto.nombre}</h3>
    <span className="card-estrellas">{estrellas}</span>
    <p className="card-precio">${producto.precio.toLocaleString('es-CL')}</p>
    <button className="card-boton" onClick={() => onAgregar(producto)}>
    Agregar al carrito
    </button>
    </div>
  );
}

export default ProductCard;
