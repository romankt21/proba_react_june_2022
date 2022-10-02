import User from "../user/User";
import {useEffect, useState} from "react";



export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        console.log(obj);
        setUser(obj)
    }

    useEffect(()=> {

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
            setUsers(value);
        });

    },[])

    return (
        <div>
            <hr/>
            {/*{user && <div> {JSON.stringify(user)} </div> }*/}
            {/*{user? <div>plus</div>:<div>minus</div>}*/}

            {/*{JSON.stringify(user)}*/}
            <h3>{user?.username}</h3>


            <hr/>


            {
                users
                    .map((user, index) => (<User item={user} key={index} lift={lift}/>))}

        </div>
    );
}