import {useState} from "react";
import Character from "./Character";

export default function Characters() {


    const [сharacters, setСharacters] = useState([]);

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setСharacters(value.results.splice(0,6));

        });




    return (
        <div>
            {
                сharacters.map(characterval => <Character key={characterval.id}
                characterval={characterval}
                />)
            }

                </div>

    );
}