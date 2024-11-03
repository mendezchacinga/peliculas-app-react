import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import style from './Detalles.module.css';
import { URL_KEY_VIDEO, URL_TRAILER_YOUTUBE, URL_REPARTO_PELICULA } from '../configApi'

function Detalles({ tema }) {
  let navigate = useNavigate();
  let location = useLocation();
  const idMovie = new URLSearchParams(location.search).get('id');

  const [dataVideo, setDataVideo] = useState({title: '', video: '', generos: [], descripcion: ''});
  const [repartoPelicula, setRepartoPelicula] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTitleAndVideo = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL_KEY_VIDEO(idMovie));
      const data = await response.json();
      setDataVideo({
        title: data?.original_title, 
        video: data?.videos?.results[0]?.key, 
        generos: data?.genres?.map(value => value.name),
        descripcion: data?.overview
      });
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setLoading(false);
    }
  }

  const getReparto = async () => {
    try {
      const response = await fetch(URL_REPARTO_PELICULA(idMovie));
      const data = await response.json();
      setRepartoPelicula(data?.cast?.slice(0,5).map(value => value.original_name));
    } catch (error) {
      console.error('Error fetching movie cast:', error);
    }
  }
  
  useEffect(() => {
    getTitleAndVideo();
    getReparto();
  }, [idMovie]);

  return (
    <main className={`${style.contenedor} ${style[tema]}`}>
      <article className={style.movieDetails}>
        <h1 className={style.titlePelicula}>{dataVideo.title}</h1>
        {loading ? (
          <div className={style.loadingSpinner}></div>
        ) : (
          <>
            <div className={style.marcoVideo}>
              <iframe 
                width="560" 
                height="315" 
                src={`${URL_TRAILER_YOUTUBE}${dataVideo.video}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
            <section className={style.detallesPelicula}>
              <p><strong>Descripción:</strong> {dataVideo.descripcion}</p>
              <p><strong>Género:</strong> {dataVideo.generos.join(', ')}</p>
              <p><strong>Reparto:</strong> {repartoPelicula.join(', ')}</p>
            </section>
          </>
        )}
        <button className={style.backButton} onClick={() => navigate('/')}>Volver al inicio</button>
      </article>
    </main>
  )
}

export default Detalles