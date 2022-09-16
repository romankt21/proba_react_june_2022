import './User.css';


export default function User(props) {

    let {name, age} = props

    return (
        <div>
            <h2>{name} {age}</h2>
            <p>
                {age}
            </p>


        </div>
    );
}



