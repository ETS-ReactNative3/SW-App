import React from 'react'

import NavBar from '../components/NavBar'
import FavoriteFilms from '../components/FavoriteFilms'
import FavoriteCharacters from '../components/FavoriteCharacters'
import { FcLike } from 'react-icons/fc'

export default function FavPage() {
  return (
    <React.Fragment>
      <NavBar />
      <div>
      <h1>FavPage</h1>
      <div id='fav-movies'>
        <h1>Movies</h1>
        <FcLike/>
        <FavoriteFilms />
      </div>
      <h1>Characters</h1>
      <div id='fav-characters'>
        <FcLike/>
        <FavoriteCharacters />
      </div>
      </div> 
    </React.Fragment>
  )
}
