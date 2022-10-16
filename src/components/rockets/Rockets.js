import {useEffect, useState} from "react";
import {rocketServise} from "../../services/rocket.servise";
import {Rocket} from "../rocket/Rocket";

const Rockets = () => {

    const [rockets, setRockets]   = useState([]);
    useEffect(() => {
        rocketServise.getAll().then(value => setRockets(value.data.filter(value => value.launch_year !=='2020')))
    },[])
    return (
        <div>{
            rockets.map(rocket =>  <Rocket key = {rocket.flight_number} rocket={rocket}/>)

        }
        </div>
    )
}

export {Rockets}