import React, { useState } from 'react';
import { movies } from './sahteVeri.js';
import KaydedilenlerListesi from './components/KaydedilenlerListesi.jsx';
import FilmListesi from './components/FilmListesi.jsx';
import Film from './components/Film.jsx';
import { Route, Switch } from 'react-router-dom';

export default function App() {

  const [filmler, setFilmler] = useState(movies);
  const [kaydedilenFilmler, setKaydedilenFilmler] = useState([]);

  const KaydedilenlerListesineEkle = (movie) => {
   

    const savedMovie = kaydedilenFilmler.find((item) => item.id === movie.id);

    if (!savedMovie) {
      setKaydedilenFilmler([...kaydedilenFilmler, movie]);
    }
  };

  return (
    <div>
      <KaydedilenlerListesi list={kaydedilenFilmler} />

      <Switch>
        <Route exact path="/">
          <FilmListesi
            movies={filmler}
            KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
          />
        </Route>

        <Route path="/filmler/:id">
          <Film
            movies={filmler}
            KaydedilenlerListesineEkle={KaydedilenlerListesineEkle}
          />
        </Route>
      </Switch>
    </div>
  );
}
