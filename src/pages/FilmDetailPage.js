import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import NavBar from '../components/NavBar'
import FilmDetails from '../components/FilmDetails'


export default function FilmDetailPage() {

  const [film, setFilm] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`https://swapi.dev/api/films/${id}`)
      .then(response => {
        setFilm(response.data)
      })
      .catch(err => console.log(err))
  })

  return (
    <React.Fragment>
    <NavBar />
		{film === null ? <div>Loading ...</div> :
      <FilmDetails film={film}/>
    }
    </React.Fragment>
  )
}
