import { useEffect, useState, useCallback } from 'react';
import Posters from '../componentes/Posters';
import { URL_PELICULAS_POPULARES, URL_IMAGEN, URL_QUERY_PELICULA } from '../configApi';
import style from './Home.module.css';

function Home({ tema }) {
  const [peliculasDelMomento, setPeliculasDelMomento] = useState([]);
  const [loading, setLoading] = useState(false);
  const [queryMovie, setQueryMovie] = useState('');

  const getPeliculasPopulares = async () => {
    try {
      setLoading(true);
      const response = await fetch(URL_PELICULAS_POPULARES);
      const data = await response.json();
      setPeliculasDelMomento(data.results);
      localStorage.setItem('movies', JSON.stringify(data.results));
    } catch (error) {
      console.error('Error al obtener películas populares:', error);
    } finally {
      setLoading(false);
    }
  };

  const getQueryMovie = useCallback(async (query) => {
    if (query.length < 3) return;
    try {
      setLoading(true);
      const response = await fetch(URL_QUERY_PELICULA(query));
      const data = await response.json();
      if (data.results.length) {
        const top_12_peliculas = data.results.slice(0, 12);
        setPeliculasDelMomento(top_12_peliculas);
      }
    } catch (error) {
      console.error('Error al buscar películas:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Implementación de debounce
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (queryMovie) {
        getQueryMovie(queryMovie);
      } else {
        const firstMovies = JSON.parse(localStorage.getItem('movies') || '[]');
        setPeliculasDelMomento(firstMovies);
      }
    }, 300); // 300ms de retraso

    return () => clearTimeout(debounceTimer);
  }, [queryMovie, getQueryMovie]);

  useEffect(() => {
    getPeliculasPopulares();
  }, []);

  return (
    <main className={`${style.contenedor} ${style[tema]}`}>
      <h1 className={style.contenedor_titulo}>Películas Del Momento</h1>

      <div className={style.searchBox}>
        <label htmlFor="busqueda" className={style.searchLabel}>Buscar película</label>
        <input
          type="search"
          onChange={({ target }) => setQueryMovie(target.value)}
          placeholder='Spiderman, Titanic...'
          id='busqueda'
          className={style.searchInput}
          autoComplete='off'
        />
      </div>

      {loading ? (
        <div className={style.loadingContainer}>
          <div className={style.loadingSpinner}></div>
          <p className={style.loadingText}>Cargando películas...</p>
        </div>
      ) : (
        <div className={style.posters}>
          {peliculasDelMomento.map(movie => (
            <Posters
              URL_IMAGEN={URL_IMAGEN}
              key={movie.id}
              poster_path={movie.poster_path}
              titleMovie={movie.title}
              idPelicula={movie.id}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default Home; 