import {useState} from "react";
import User from "../user/User";
import UserDetails from "../user-details/User-Details";


export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj)
    }


    fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(value => value.json())
        .then(value => {setUsers(value)
        })



    return (
        <div>
            {
                users.map(userNew => <User key = {userNew.id} userProps={userNew} showUser={showUser}/>)
            }
            {
                user && <UserDetails key = {user.id} userProps={user}/>
            }

        </div>
    )
}