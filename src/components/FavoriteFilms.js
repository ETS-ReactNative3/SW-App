import React from 'react'

export default function FavoriteFilms() {

const getFavFilms = JSON.parse(localStorage.getItem('favoriteFilms') || null)


  return(
    <React.Fragment>
      {getFavFilms === null ? <div>No favs saved yet...</div> :
        <div>
        {getFavFilms.map(film =>
          <div key={film.episode_id}>
            <h1>{film.title}</h1>
          </div>
        )
        }
        </div>
      }
    </React.Fragment>
  )
}