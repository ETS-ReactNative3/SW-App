import React from 'react'
import { Link } from 'react-router-dom'

export default function FavoriteFilms() {

const getFavFilms = JSON.parse(localStorage.getItem('favoriteFilms') || null)


  return(
    <React.Fragment>
      {getFavFilms === null ? <div>No favs saved yet...</div> :
        <React.Fragment>
        {getFavFilms.map(film =>
          <div key={film.episode_id} className='favorite-div'>
            <img className='fav-img' src={`/film-covers/${film.episode_id}.jpg`} alt='filmposter'/> 
            <Link className='link' to={`/films/${film.episode_id}`}><h1>{film.title}</h1></Link>
          </div>
        )
        }
        </React.Fragment>
      }
    </React.Fragment>
  )
}