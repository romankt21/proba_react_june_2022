// import logo from './logo.svg';
import './App.css';



import {
    BrowserRouter,
    Routes,
    Route,
    link,
    Outlet, Link
} from "react-router-dom";
import Home from "./components/home/Home";


function App() {
    return (
        <div >
            {/*<h1>hello</h1>*/}
            <ul>
                <li><Link to={'/'}>Home page</Link></li>
                <li><Link to={'/users'}>all users page</Link></li>
                <li><Link to={'/posts'}>all posts page</Link></li>


            </ul>

            <hr/>
            <Routes>

                <Route path={'/'} element={<Home/>}/>


            </Routes>

            <hr/>






        </div>
    );

}

export default App;