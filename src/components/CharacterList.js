import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopUpCharacterDetails from './PopUpCharacterDetails';

export default function CharacterList(props) {
    
    const [characters, setCharacters] = useState([])
    const [showPopUp, setShowPopUp] = useState(false)

    // get the single characters and store them in the characters state
    useEffect(() => {
        axios.get(props.character)
            .then((response) => {
                setCharacters([...characters, response.data])
            })
            .catch(err => console.log(err))
    }, [] );

    const handlePopUp = () => {
        {setShowPopUp(!showPopUp)}
    }
  
    return (
        <React.Fragment>
            {characters === [] ? <div>Loading ...</div> :
            <ul>
                {characters.map((character) => {
                    return (
                        <React.Fragment>
                            <li onClick={handlePopUp}>{character.name}</li>
                            {showPopUp && (
                                <PopUpCharacterDetails character={character} handleClose={() => setShowPopUp(false)}/>
                            )}
                        </React.Fragment>
                    )
                })}
            </ul>
            } 
        </React.Fragment>
    )
}
