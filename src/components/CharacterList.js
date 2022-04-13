import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function CharacterList(props) {
    
    const [characters, setCharacters] = useState([])

        useEffect(() => {
            axios
                .get(props.character)
                .then((response) => {
                    console.log('response.data', response.data);
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
                <li><button>{character.name}</button></li>
            </ul>
        )
    })}
    </div>
    }
    </div>
    )
}
