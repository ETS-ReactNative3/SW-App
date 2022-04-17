import React from 'react'

export default function FavoriteCharacters() {

const getFavCharacters = JSON.parse(localStorage.getItem('favoriteCharacters') || null)

  return(
    <div>
    {getFavCharacters.map(character =>
      <div>
        <h1>{character.name}</h1>
      </div>
    )
    }
    </div>
  )
}
