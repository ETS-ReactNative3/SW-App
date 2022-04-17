import React from 'react'
import { useParams } from 'react-router-dom'
import CharacterList from './CharacterList'

export default function FilmDetails(props) {

  const { id } = useParams()

    return (
      <React.Fragment>
    <div className='film-detail-card'>
      <img src={`/film-covers/${id}.jpg`} alt='Cover-Image'/> 
      <div>
        <h2>Title:</h2> <h3>{props.film.title}</h3><br></br>
        <h2>Director:</h2> <h3>{props.film.director}</h3><br></br>
        <h2>Description:</h2> <h3>{props.film.opening_crawl}</h3><br></br>
        <br></br>
        <h1>Characters</h1>
          {props.film.characters.map(character =>
              <CharacterList character={character}/>
          )}
      </div>
    </div>
  </React.Fragment>
  )
}
