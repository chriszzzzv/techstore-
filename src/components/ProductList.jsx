import '../css/ProductList.css';
import ProductCard from './ProductCard';

function ProductList({ productos, onAgregar }) {
  return (
    <section className="productos">
      <h2 className="productos-titulo">Productos destacados</h2>
      {productos.length === 0 ? (
        <p className="productos-vacio">No encontramos productos para tu búsqueda 😕</p>
      ) : (
        <div className="productos-grilla">
          {productos.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onAgregar={onAgregar} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;