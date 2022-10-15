export default function Character(props) {
    const {characterval} = props;
    return (
        <div>
            <h3> {characterval.id} -- {characterval.name}</h3>
            <p>{characterval.status}</p>
        </div>
    )
}