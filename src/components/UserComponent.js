export default function UserComponent(props) {
    let {item: {name, id, email}} = props;

    return (
        <div>
            <h2>{name} {id}</h2>
            <p> {email} </p>

        </div>
    )
}

// export default function UserComponent(props) {
// let {item} = props;
//
// return (
//     <div>
//         <h2>{item.name} {item.id}</h2>
//         <p> {item.email} </p>
//
//     </div>
// )
// }