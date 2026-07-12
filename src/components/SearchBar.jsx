function SearchBar({ busqueda, onBuscar }) {
    return (
      <input
        type="text"
        className="header-buscador"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => onBuscar(e.target.value)}
      />
    );
  }
  
  export default SearchBar;
  