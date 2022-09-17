// import logo from './logo.svg';
import './App.css';
import SimpsonComponent from "./components/SimpsonComponent";

function App() {

    return (
       <div className="wrap">
           <SimpsonComponent
               itemName={'bart'}
               pic={"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f15f5662080793.5a8432e3d5b6b.jpg"}

           />

           <SimpsonComponent
               itemName={'homer'}
               pic={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}

           />
       </div>
    );
}

export default App;