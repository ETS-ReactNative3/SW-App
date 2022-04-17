import React, { useEffect, useState } from 'react'
import axios from 'axios'

import FilmCard from './FilmCard'

export default function FilmList() {

  const [films, setFilms] = useState([])
  // console.log(films)

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films")
      .then((response) => {
        // console.log('response.data', response.data.results);
        setFilms(response.data.results.sort(
          function(a, b) { 
            return parseInt(a.episode_id) - parseInt(b.episode_id)
          }))
      })
      .catch(err => console.log(err))
  }, [] );

  return (
	<React.Fragment>
	{films === [] ? <div>Loading ...</div> :
    <div className='film-card-container'>
    {films.map(film =>
      <FilmCard film={film} />
    )}
    </div>
  } 
  </React.Fragment>
  )
}
