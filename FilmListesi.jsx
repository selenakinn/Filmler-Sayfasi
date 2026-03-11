import React from 'react';
import FilmDetaylari from './FilmDetaylari.jsx';

export default function FilmListesi(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id}>
          <FilmDetaylari movie={movie} />

          <button onClick={() => props.KaydedilenlerListesineEkle(movie)}>
            Kaydet
          </button>
        </div>
      ))}
    </div>
  );
}
