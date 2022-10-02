import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../services/user.api.service";
import {getUsersAxios} from "../services/user.api.axios.service";



export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        console.log(obj);
        setUser(obj)
    }

    // useEffect(()=> {
    //
    //     getUsers().then(value => setUsers(value));
    //
    //
    // },[])

    useEffect(() => {
        getUsersAxios().then(value => setUsers(value.data))
    }, []);

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