import {simpsons} from "../data/Data";
import Simpson from "../simpson/Simpson";

export default function Simpsons() {
    return (
        <div>
            {
                simpsons.map((simpsonNew, index) => <Simpson key = {index}  simpsonProps = {simpsonNew}/>)
            }
        </div>
    )
}