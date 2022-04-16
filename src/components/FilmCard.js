import React from 'react';
import { Link } from 'react-router-dom';

import ToggleHeart from './ToggleHeart';

export default function FilmCard(props) {
    
    return (
      <React.Fragment>
          <div key={props.film.episode_id}>
            <h1 >{props.film.episode_id}</h1>
            <Link to={`/films/${props.film.episode_id}`}><h3>{props.film.title}</h3></Link>
            <ToggleHeart film={props.film}/>
          </div>
      </React.Fragment>
    )
}
