import React from 'react'
import { FcLike } from 'react-icons/fc'
import NavBar from '../components/NavBar'
import FavoriteFilms from '../components/FavoriteFilms'
import FavoriteCharacters from '../components/FavoriteCharacters'


export default function FavPage() {
  return (
    <div className='fixed-bg bg-fav'>
      <NavBar />
      <div className='container heading-fav '>
        <h1>Favorites</h1>
      </div>
      <div className='container-fav'>
        <div>
          <h1 className='fav-title'>Movies</h1>
            <FavoriteFilms />
        </div>
        <div>
          <h1 className='fav-title'>Characters</h1>
          <FavoriteCharacters />
        </div>
      </div>
    </div>
  )
}
