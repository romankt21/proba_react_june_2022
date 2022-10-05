import React, {useEffect, useState} from 'react';
import CarForm from "../carForm/CarForm";
import {carService} from "../../services";
import Car from "../car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data})=>setCars(data))

    }, [])
    
    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
            
        </div>
    );
};

export default Cars;