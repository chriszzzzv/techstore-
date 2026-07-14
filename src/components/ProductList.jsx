import { useState } from 'react';
import '../css/ProductList.css';
import ProductCard from './ProductCard';

function ProductList({ productos, onAgregar }) {
  const [orden, setOrden] = useState('ninguno');

  // Copia del array para no modificar el original al ordenar
  const productosOrdenados = [...productos];
  if (orden === 'menor') {
    productosOrdenados.sort((a, b) => a.precio - b.precio);
  }
  if (orden === 'mayor') {
    productosOrdenados.sort((a, b) => b.precio - a.precio);
  }

  return (
    <section className="productos">
      <div className="productos-encabezado">
        <h2 className="productos-titulo">Productos destacados</h2>
        <select
          className="productos-orden"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="ninguno">Ordenar por...</option>
          <option value="menor">Menor precio primero</option>
          <option value="mayor">Mayor precio primero</option>
        </select>
      </div>
      {productosOrdenados.length === 0 ? (
        <p className="productos-vacio">No encontramos productos para tu búsqueda 😕</p>
      ) : (
        <div className="productos-grilla">
          {productosOrdenados.map((producto) => (
            <ProductCard key={producto.id} producto={producto} onAgregar={onAgregar} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
