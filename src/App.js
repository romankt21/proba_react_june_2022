// import logo from './logo.svg';
import './App.css';
import User from "./components/user/User";

function App() {
    return (
        <div >
            <h1>hello</h1>
            <User name={'vasyl'} age={31}/>
            <User name={'petro'} age={41}/>


        </div>
    );

}

export default App;