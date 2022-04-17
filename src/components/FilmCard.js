import React from 'react';
import { Link } from 'react-router-dom';
import ToggleHeartFilm from './ToggleHeartFilm';

export default function FilmCard(props) {
  
    return (
      <React.Fragment>
        <div className='filmcard-container' key={props.film.episode_id}>
          <img src={`/film-covers/${props.film.episode_id}.jpg`} alt='Cover-Image'/>
          <div>
            <h1>{props.film.episode_id}</h1> 
            <Link className='link filmtitle' to={`/films/${props.film.episode_id}`}>{props.film.title}</Link>
            <ToggleHeartFilm film={props.film}/>
          </div>
        </div>
      </React.Fragment>
    )
}
