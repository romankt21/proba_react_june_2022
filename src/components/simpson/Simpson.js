export default function Simpson(props) {
    let {simpson} = props
    return (
        <div>
            <h2>{simpson.name}</h2>
            <p> {simpson.age} - {simpson.surname}</p>
        </div>
    )
}