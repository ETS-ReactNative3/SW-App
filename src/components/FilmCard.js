import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ToggleHeart from './ToggleHeart';
import CharacterList from './CharacterList';

export default function FilmCard(props) {

    const [films, setFilms] = useState([])

    useEffect(() => {
        axios
            .get("https://swapi.dev/api/films")
            .then((response) => {
                // console.log('response.data', response.data.results);
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
      <div key={film.episode_id} className="flip-card-outer">
      <div className="flip-card-inner">
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <h1>{film.episode_id}</h1>
            <h3>{film.title}</h3>
            <ToggleHeart /> 
          </div>
        </div>
        <div className="card back">
          <div className="card-body justify-content-center align-items-center">
            <h3>{film.title}</h3>
            <h3>Director Name</h3>
            <h3>{film.director}</h3>
            <h3>Description</h3>
            <h3>{film.opening_crawl}</h3>
            <h3>Cover Picture</h3>
            {film.characters.map(character =>
                <CharacterList character={character}/>
            )}
            <ToggleHeart /> 
          </div>
        </div>
      </div>
    </div>
    )})}
    </div>
    } 
    </div>
  )
}
