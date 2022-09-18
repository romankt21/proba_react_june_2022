// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import UserComponent from "./components/UserComponent";
import {logDOM} from "@testing-library/react";

function App() {

    let [users, setUsers] = useState([]);
    let [choosenUser, setChoosenUser] = useState( null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))

    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => setChoosenUser(value.data));
    }



    return (
        <div >

            {
                choosenUser && (<div>{choosenUser.name}</div>)
            }
            <hr/>
            {users.map(value => <
                UserComponent
                key = {value.id}
                item={value}
                chooseUser={chooseUser}
            />)}

        </div>
    );

}

export default App;