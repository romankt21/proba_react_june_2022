import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate()
        return (
        <div >
            <button onClick={()=>navigate()}></button>
        </div>
    );
};
