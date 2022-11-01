export default function Character(props) {
    const {characterProps} = props
    return (
        <div>
            <h1>{characterProps.id} - {characterProps.name} </h1>
            <h2>{characterProps.status} - {characterProps.species} - {characterProps.gender}</h2>

        </div>
    )
}