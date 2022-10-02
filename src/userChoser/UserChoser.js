import {useEffect, useState} from "react";
import {getUserAxios} from "../components/services/user.api.axios.service";


// eslint-disable-next-line react-hooks/rules-of-hooks
export default function UserChoser() {

let [user, setUser] = useState( null);
    let [id, setId] = useState(1);

    const increment = () => {
        id++;
        setId(id);
    }

    const decrement = () => {
        id--;
        setId(id);
    }

    useEffect( () => {
        console.log('effect');
        getUserAxios(id).then(({data}) => {
            setUser(data);
        })
    }, [id])

    return (
        <div>
            <p>{JSON.stringify(user)}</p>
            <button onClick={()=>{increment(id)}}>next</button>
            <button onClick={()=>{decrement(id)}}>prev</button>


        </div>
    )
}