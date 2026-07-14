import '../css/Cart.css';

function Cart({ carrito, onQuitar }) {
  const total = carrito.reduce((suma, producto) => suma + producto.precio, 0);

  return (
    <div className="cart">
      <h3 className="cart-titulo">Tu carrito</h3>
      {carrito.length === 0 ? (
        <p className="cart-vacio">Aún no agregas productos</p>
      ) : (
        <>
          <ul className="cart-lista">
            {carrito.map((producto, indice) => (
            <li key={indice} className="cart-item">
            <img src={producto.imagen} alt={producto.nombre} className="cart-item-img" />
            <span className="cart-item-nombre">{producto.nombre}</span>
            <span>${producto.precio.toLocaleString('es-CL')}</span>
            <button className="cart-quitar" onClick={() => onQuitar(indice)}>✕</button>
            </li>
            ))}
          </ul>
          <p className="cart-total">Total: ${total.toLocaleString('es-CL')}</p>
        </>
      )}
    </div>
  );
}

export default Cart;
