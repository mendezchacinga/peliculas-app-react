import { useNavigate } from 'react-router-dom';
import style from './Posters.module.css';

function Posters({ URL_IMAGEN, poster_path, titleMovie, idPelicula }) {
  let navigate = useNavigate();
    
  return (
    <article className={style.contenedor} onClick={() => navigate(`/detalles?id=${idPelicula}`)}>
      <div className={style.marco_poster}>
        <img 
          src={`${URL_IMAGEN}${poster_path}`}
          alt={`Póster de ${titleMovie}`}
          className={style.Poster}
          loading="lazy"
        />
      </div>
      <h2 className={style.tituloPelicula}>{titleMovie}</h2>
    </article>
  );
}

export default Posters;