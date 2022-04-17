import React, { useState, useEffect } from 'react'
import { FcLike } from 'react-icons/fc';
import { FcLikePlaceholder } from 'react-icons/fc';

export default function ToggleHeartCharacter(props) {
  
  const [isFavorite, setIsFavorite] = useState(useFavorite)
  const [selectedCharacter, setSelectedCharacter] = useState([])

  let useFavorite;

  const checkFavorites = () => { 
    const getFavoriteCharacters = JSON.parse(localStorage.getItem('favoriteCharacters') || null)
    if (getFavoriteCharacters !== null){
      useFavorite = (getFavoriteCharacters.some(e => JSON.stringify(e.name) === JSON.stringify(props.character.name)))
    }
    console.log('useFav', useFavorite)
    return useFavorite
  }
 
  useEffect(() => {
    checkFavorites()
  }, [])

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  const addFav = () => {
    let array = selectedCharacter;
    let addArray = true;
    array.map((item, key) => {
      if (item === props.character) {
        array.splice(key, 1);
        addArray = false
      }
    });
    if (addArray) {
      array.push(props.character);
    }
    setSelectedCharacter([...array])

    // check if localStorage with key 'favoriteFilms' exists
    const favoriteCharacters = localStorage.getItem('favoriteCharacters');
    
    if(favoriteCharacters){
      console.log('appending to existing Storage');
      // if favoriteCharacters exists save the status quo
      var existingStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));
      // and append data to the existing data of localStorage
      existingStorage.push(props.character)
      // update Storage
      localStorage.setItem('favoriteCharacters', JSON.stringify(existingStorage))
    }
    else {
      // create new storage
      console.log('Storage not found, creating new Storage');
      localStorage.setItem('favoriteCharacters', JSON.stringify(selectedCharacter))
    }
  }

  const removeFav = () => {
  var existingStorage = JSON.parse(localStorage.getItem('favoriteCharacters'));
  // console.log('existingStorage', existingStorage)
  existingStorage.forEach((storedCharacter, index) => {
    // if title from stored film === title of film to be removed, remove it from existing Storage
    if (storedCharacter.name === props.character.name) {
      return existingStorage.splice(index, 1);
    }
  });
  localStorage.setItem('favoriteCharacters', JSON.stringify(existingStorage))
  console.log('deleted')
  }

  return (
    <button className='btn-heart' onClick={handleIsFavorite}>
      {isFavorite
        ?  (<FcLike onClick={removeFav}
            />)
        :   (<FcLikePlaceholder onClick={addFav}
            />) 
        }
    </button>
  )
}

