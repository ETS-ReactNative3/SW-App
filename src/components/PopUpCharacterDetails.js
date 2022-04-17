import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ToggleHeartCharacter from './ToggleHeartCharacter';

export default function PopUpCharacterDetails(props) {

    const [homeworld, setHomeworld] = useState(null)

    useEffect(() => {
        axios
            .get(`${props.character.homeworld}`)
            .then((response) => {
                // console.log('response.data', response.data);
                setHomeworld(response.data)
            })
            .catch(err => console.log(err))
    }, [] );

    return (
    <div>
    {homeworld === null ? <div>Loading ...</div> :
    <div>
        <h5>Name: {props.character.name}</h5>
        <h5>Gender: {props.character.gender}</h5>
        <h5>Homeworld: {homeworld.name}</h5>
        <h5>Description: {props.character.name} has {props.character.hair_color} hair, is {props.character.eye_color} eyed and {props.character.height} tall.</h5>
        <h5>Image</h5>
        <ToggleHeartCharacter character={props.character}/>
    </div>
    }
    </div>
)
}
