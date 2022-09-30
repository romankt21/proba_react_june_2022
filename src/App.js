// import logo from './logo.svg';
import './App.css';

import {users} from "./data"

function App() {
    return (
        <div >
            <h1>hello</h1>
            {
                users.map(user => (
                    <div>
                       <h2>{user.id} - {user.name}</h2>
                        <p>{user.address.city} <br/> {user.email}</p>

                    </div>
                ))
            }



        </div>
    );

}

export default App;