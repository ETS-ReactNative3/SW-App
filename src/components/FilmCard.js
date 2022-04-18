import React from 'react';
import { Link } from 'react-router-dom';
import ToggleHeartFilm from './ToggleHeartFilm';

export default function FilmCard(props) {

const storeFilm = () => {
  localStorage.setItem('filmDetails', JSON.stringify(props.film));
  console.log('stored')
}
  
  return (
    <div className='filmcard-container' key={props.film.episode_id}>
      <div>
        <Link className='link' to={`/films/${props.film.episode_id}`} onClick={storeFilm}>
          <img src={`/film-covers/${props.film.episode_id}.jpg`} alt='filmposter'/> 
        </Link>
      </div>
      <div>
        <Link className='link' to={`/films/${props.film.episode_id}`} onClick={storeFilm}>
          <h1>{props.film.episode_id}</h1>
          <h3>{props.film.title}</h3>
        </Link>
        <ToggleHeartFilm film={props.film}/>
      </div>
    </div> 
  )
}
