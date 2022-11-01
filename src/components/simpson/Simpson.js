export default function Simpson(props) {
    const {simpsonProps} = props

    return (
        <div>
            <h1>{simpsonProps.name}</h1>
            <p>{simpsonProps.age}- {simpsonProps.surname}</p>
        </div>
    )
}