import {Link} from "react-router-dom";

export default function Post({post}) {
    return (
        <div>
            <Link><h3>{post.title}</h3></Link>
        </div>
    );
}
