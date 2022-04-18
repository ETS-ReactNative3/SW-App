import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CharacterList from './CharacterList'

export default function FilmDetails(props) {

  const { id } = useParams()

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 992;

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (width < breakpoint) {

  return (
    <React.Fragment>
      <div className='film-detail-card'>
        <img src={`/film-covers/${id}.jpg`} alt='Cover-Image'/> 
        <div>
          <h2>Title:</h2> <h3>{props.film.title}</h3><br></br>
          <h2>Director:</h2> <h3>{props.film.director}</h3><br></br>
          <h2>Description:</h2> <h3>{props.film.opening_crawl}</h3><br></br>
          <br></br>
          <h2>Characters</h2>
          {props.film.characters.map(character =>
              <CharacterList character={character}/>
          )}
        </div>
      </div>
      </React.Fragment>
  )
  }
  return (
    <React.Fragment>
      <div className='film-detail-card-desktop'>
        <div>
          <div>
          <img src={`/film-covers/${id}.jpg`} alt='Cover-Image'/>
          </div>
          <div>
            <h2>Title:</h2> <h3>{props.film.title}</h3><br></br>
            <h2>Director:</h2> <h3>{props.film.director}</h3><br></br>
            <h2>Description:</h2> <h3>{props.film.opening_crawl}</h3><br></br>
            <br></br>
          </div>
        </div>
        <div>
          <h2>Characters</h2>
          {props.film.characters.map(character =>
              <CharacterList character={character}/>
          )}
        </div>
        
      </div>
      </React.Fragment>
  )
}
