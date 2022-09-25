import {Link, useNavigate} from "react-router-dom";

export default function Post({post}) {
    let navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>{
                navigate(post.id.toString(),{state:{...post}});

            }}>{post.title}</button>
        </div>
    );
}
