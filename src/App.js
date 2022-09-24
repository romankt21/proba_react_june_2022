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
import UserDetailsV2 from "./components/userdetailsv2/UserDetailsV2";
import Posts from "./components/posts/Posts";


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
            <Route path={'users/v2/:id'} element={<UserDetailsV2/>}/>
            <Route path={'posts'}   element={<Posts/>}/>

            </Routes>

            <hr/>


        </div>
    );

}

export default App;