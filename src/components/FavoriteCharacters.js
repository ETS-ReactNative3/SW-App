import React from 'react'

export default function FavoriteCharacters() {

const getFavCharacters = JSON.parse(localStorage.getItem('favoriteCharacters') || null)

  return(
    <React.Fragment>
      {getFavCharacters === null ? <div>No favs saved yet...</div> :
        <React.Fragment>
        {getFavCharacters.map(character =>
          <div className='favorite-div'>
            <h1>{character.name}</h1>
          </div>
        )
        }
        </React.Fragment>
      }
    </React.Fragment>
  )
}
