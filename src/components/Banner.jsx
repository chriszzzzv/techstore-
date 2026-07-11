import '../css/Banner.css';
import bannerImg from '../assets/banner.jpg';

function Banner() {
return (
    <section className="banner">
    <img src={bannerImg} alt="Ofertas en tecnología" className="banner-img" />
    <div className="banner-contenido">
        <h2 className="banner-titulo">Tecnología al mejor precio</h2>
        <p className="banner-subtitulo">
        Encuentra notebooks, componentes y accesorios con hasta 40% de descuento
        </p>
        <button className="banner-boton">Ver ofertas</button>
    </div>
    </section>
);
}

export default Banner;
