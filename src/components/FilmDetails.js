import React from 'react'

import CharacterList from './CharacterList'
import ToggleHeart from './ToggleHeart'

export default function FilmDetails(props) {

    return ( 
    <div>
      <h3>Title: {props.film.title}</h3>
      <h3>Director: {props.film.director}</h3>
      <h3>Description: {props.film.opening_crawl}</h3>
      <h3>Characters</h3>
      {props.film.characters.map(character =>
          <CharacterList character={character}/>
      )}
      <ToggleHeart /> 
    </div>
  )
}
