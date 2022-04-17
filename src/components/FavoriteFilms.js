import React from 'react'

export default function FavoriteFilms() {

const getFilms = JSON.parse(localStorage.getItem('favoriteFilms') || null)

  return(
    <div>
    {getFilms.map(film =>
      <div key={film.episode_id}>
        <h1>{film.title}</h1>
      </div>
    )
    }
    </div>
  )
}