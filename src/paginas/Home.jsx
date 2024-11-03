import { useEffect, useState, useCallback } from 'react';
import Posters from '../componentes/Posters';
import { URL_PELICULAS_POPULARES, URL_IMAGEN, URL_QUERY_PELICULA } from '../configApi';
import style from './Home.module.css';

function Home({ tema }) {
  const [peliculasDelMomento, setPeliculasDelMomento] = useState([]);
  

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