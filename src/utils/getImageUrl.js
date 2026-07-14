// Convierte rutas de public/ para que funcionen en local y en GitHub Pages
export function getImageUrl(ruta) {
  const rutaLimpia = ruta.replace(/^\//, '');
  return `${import.meta.env.BASE_URL}${rutaLimpia}`;
}
