import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import NavBar from '../components/NavBar'
import FilmDetails from '../components/FilmDetails'


export default function FilmDetailPage() {

  const getFilm = JSON.parse(localStorage.getItem('filmDetails'))

  return (
    <div className='fixed-background'>
    <NavBar />
      <FilmDetails film={getFilm}/>
    </div>
  )
}
