import {useEffect, useState} from "react";

import {User} from "../user/User";
import {UserDetails} from "../user-details/User-Details";
import {userService} from "../../services";


export default function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    const showUser = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data))


    },[])


    return (
        <div>
            {
                user && <UserDetails key = {user.id} userProps={user}/>
            }
            {
                users.map(userNew => <User key = {userNew.id} userProps={userNew} showUser={showUser}/>)
            }

        </div>
    )
}