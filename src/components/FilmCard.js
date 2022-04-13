import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ToggleHeart from './ToggleHeart';

export default function FilmCard() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films")
            .then((response) => {
                console.log('response.data', response.data.results);
                setFilms(response.data.results.sort(
                    function(a, b) { 
                    return parseInt(a.episode_id) - parseInt(b.episode_id) 
                }))
            });
    }, [] );

  return (
	<div>
	{films === [] ? <div>Loading ...</div> :
	<div>
      {films.map(film => {
        return (
            <div key={film.episode_id}>
            <h1>{film.episode_id}</h1>
            <div>
                <h3>{film.title}</h3>
            <ToggleHeart /> 
            </div>
            </div>
        )
      }
      )}
    </div>
    }
    </div>
  )
}
