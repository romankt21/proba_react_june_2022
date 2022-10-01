import User from "../user/User";
import {useEffect, useState} from "react";



export default function Users() {
    let [users, setusers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (id) => {
        console.log(id)
    }

    useEffect(()=> {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setusers(value);
        });

    },[])

    return (
        <div>
            <hr/>
            {/*{user && <div> {JSON.stringify(user)} </div> }*/}
            {/*{user? <div>plus</div>:<div>minus</div>}*/}

            {JSON.stringify(user)}



            <hr/>


            {
                users
                    .map((user ,index) => (<User item={user} key={index} lift={lift}/>))}

        </div>
    )
}