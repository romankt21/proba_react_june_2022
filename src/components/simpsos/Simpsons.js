import {simpsons} from "../data/data";
import Simpson from "../simpson/Simpson";

export default function Simpsons() {
    return (
        <div>
            {simpsons.map((simp, index) =>
                <Simpson key={index} simpson={simp}/>)}
        </div>
    )
}