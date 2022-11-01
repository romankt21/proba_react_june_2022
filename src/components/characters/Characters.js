import {useState} from "react";
import Character from "../character/Character";

export default function Characters() {

    const [characters, setCharacters] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
         .then(value => value.json())
         .then(value => {setCharacters(value.results.splice(0, 6))})


    return (
        <div>
            {
                characters.map(characterNew => <Character key = {characterNew.id} characterProps = {characterNew}/>)
            }
        </div>
    )
}