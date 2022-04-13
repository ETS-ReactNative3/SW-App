import React, { useState, useEffect } from 'react'
import axios from 'axios';

import PopUpCharacterDetails from './PopUpCharacterDetails';

export default function CharacterList(props) {
    
    const [characters, setCharacters] = useState([])
    const [characterToBeShown, setCharacterToBeShown] = useState(null)
    const [showPopUp, setShowPopUp] = useState(false)

    //handle Pop-Up
    const handlePopUp = character => {
        setCharacterToBeShown(character)
    }

    // get the single characters and store them in the characters state
        useEffect(() => {
            axios
                .get(props.character)
                .then((response) => {
                    setCharacters([...characters, response.data])
                });
        }, [] );
  
    return (
    <div>
    {characters === [] ? <div>Loading ...</div> :
    <div>
    {characters.map((character) => {
        return (
            <ul>
                <li><button onClick={() => {setShowPopUp(!showPopUp)}}>{character.name}</button></li>
                {showPopUp && (
                    <PopUpCharacterDetails character={character} handleClose={() => setShowPopUp(false)}/>
                )}
            </ul>
        )
    })}
    </div>
    }
    </div>
    )
}
