import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import axios from 'axios'
import CharacterList from './CharacterList'

export default function FilmDetails(props) {

  const { id } = useParams()
  // const [film, setFilm] = useState(null)

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/films/${id}`)
  //   .then(response => {
  //     setFilm(response.data)
  //   })
  //   .catch(err => console.log(err))
  // }, [])

    return (
      <React.Fragment>
	{/* {film === null ? <div>Loading ...</div> :  */}
    <div className='film-detail-card'>
      <img src={`/film-covers/${id}.jpg`} alt='Cover-Image'/> 
      <div>
        <h1>Title:</h1> <h3>{props.film.title}</h3><br></br>
        <h1>Director:</h1> <h3>{props.film.director}</h3><br></br>
        <h1>Description:</h1> <h3>{props.film.opening_crawl}</h3><br></br>
        <br></br>
        <h1>Characters</h1>
          {props.film.characters.map(character =>
              <CharacterList character={character}/>
          )}
      </div>
    </div>
  {/* } */}
  </React.Fragment>
  )
}
