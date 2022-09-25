import {useLocation} from "react-router";

export default function PostDetails() {
   let {state} = useLocation();
   console.log(state);
    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
}
