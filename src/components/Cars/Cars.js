import {CarForm} from "../CarForm/CarForm";
import {useEffect, useState} from "react";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);


    useEffect(()=>{
        carService.getAll().then(({data})=>setCars(data))
        }, [])

    return (
        <div>
            <CarForm setCars={setCars}/>
            <hr/>
            {cars.map((car=><Car key={car.id} car={car}/>))}

        </div>
    )
};


export {Cars};