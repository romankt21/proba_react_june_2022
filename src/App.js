// import logo from './logo.svg';
import './App.css';



import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import UserDetails from "./components/userdetails/UserDetails";


function App() {
    return (
        <div >

            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/users'}>all users page</Link></li>
                <li><Link to={'/posts'}>all posts page</Link></li>


            </ul>

            <hr/>
            <Routes>

            <Route index element={<Home/>}/>
            <Route path={'users'} element={<Users/>}/>
            <Route path={'users/:id'} element={<UserDetails/>}/>

            </Routes>

            <hr/>


        </div>
    );

}

export default App;