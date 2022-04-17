import React from 'react'

import NavBar from '../components/NavBar'
import FilmList from '../components/FilmList'

export default function FilmPage() {
  return (
    <div>
      <NavBar />
      <div className='container'>
        <h1>Star Wars Filmlist</h1>
        <FilmList />
      </div>
    </div>
  )
}
