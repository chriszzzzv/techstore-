import '../css/ProductList.css';
import productos from '../data/productos.json';
import ProductCard from './ProductCard';

function ProductList({ onAgregar }) {
  return (
    <section className="productos">
      <h2 className="productos-titulo">Productos destacados</h2>
      <div className="productos-grilla">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} onAgregar={onAgregar} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;