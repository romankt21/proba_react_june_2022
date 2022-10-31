import {useEffect, useState} from "react";
import Simpson from "../simpson/Simpson";
import {simpsons} from "../data/Data";

export default function Simpsons() {



    return (
        <div>
            {
                simpsons.map((simpson, index) => <Simpson  key={index} simpson = {simpson}/>)
            }
        </div>
    )
}