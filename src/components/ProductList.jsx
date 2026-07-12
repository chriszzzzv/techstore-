import '../css/ProductList.css';
import productos from '../data/productos.json';
import ProductCard from './ProductCard';

function ProductList() {
return (
    <section className="productos">
    <h2 className="productos-titulo">Productos destacados</h2>
    <div className="productos-grilla">
        {productos.map((producto) => (
    <ProductCard key={producto.id} producto={producto} />
        ))}
    </div>
    </section>
);
}

export default ProductList;
