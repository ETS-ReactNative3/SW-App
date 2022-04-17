import React from 'react'

import NavBar from '../components/NavBar'
import FavoriteFilms from '../components/FavoriteFilms'
import FavoriteCharacters from '../components/FavoriteCharacters'
import { FcLike } from 'react-icons/fc'

export default function FavPage() {
  return (
    <div className='fixed-bg bg-fav'>
      <NavBar />
      <div className='container-row'>
        <div id='fav-movies'>
          <h1 className='fav-title'><FcLike/>Movies<FcLike/></h1>
            <FavoriteFilms />
        </div>
        <div id='fav-characters'>
          <h1 className='fav-title'><FcLike/>Characters<FcLike/></h1>
          <FavoriteCharacters />
        </div>
      </div>
    </div>
  )
}
