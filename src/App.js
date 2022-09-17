// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import UserComponent from "./components/UserComponent";

function App() {

    let [users, setUsers] = useState( []);
        useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers (value);
                    console.log(value);
                });
        }, []);


    return (
        <div>

            {
                users.map(value => <UserComponent item = {value} />)
            }

        </div>
    );

}

export default App;