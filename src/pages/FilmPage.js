import React from 'react'

import NavBar from '../components/NavBar'
import FilmList from '../components/FilmList'

export default function FilmPage() {
  return (
    <div>
        <NavBar />
        <h1>The Films</h1>
        <FilmList />
    </div>
  )
}
