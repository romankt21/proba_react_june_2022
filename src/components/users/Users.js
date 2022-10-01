import User from "../user/User";
import {useState} from "react";



export default function Users() {
    let [users, setusers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setusers(value);
        });


    return (
        <div>
            {users.map((user ,index) => (<User item={user} key={index}/>))}

        </div>
    )
}