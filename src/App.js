// import logo from './logo.svg';
import './App.css';
import User from "./components/user/User";
import SimpsonComponent from "./components/user/SimpsonComponent";

function App() {
    return (
        <div >
            <h1>hello</h1>
            <User name={'vasyl'} age={31}/>
            <User name={'petro'} age={41}/>

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f15f5662080793.5a8432e3d5b6b.jpg"/>

            <SimpsonComponent/>
        </div>
    );

}

export default App;