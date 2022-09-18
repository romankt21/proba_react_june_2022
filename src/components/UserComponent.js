export default function UserComponent(props) {
    let {item: {name, id, email}} = props;

    return (
        <div>
            <h2>{name} {id}</h2>
            <p> {email} </p>

        </div>
    )
}

function max (a, b) {
    return new Promise( (resolve, reject) => {})
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