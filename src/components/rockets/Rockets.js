import {useEffect, useState} from "react";
import {rocketService} from "../../services";
import {Rocket} from "../rocket/Rocket";

const Rockets = () => {

    const [rockets, setRockets] =useState([])

    useEffect(() => {
        rocketService.getAll().then(value => setRockets(value.data.filter(value => value.launch_year !== '2020')))

    },[])
    return (
        <div>
            {
                rockets.map(rocketNew => <Rocket key={rocketNew.flight_number } rocketProps = {rocketNew}/>)
            }
        </div>
    )
}

export {Rockets}