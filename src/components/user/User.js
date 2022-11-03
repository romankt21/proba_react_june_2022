const User = ({userProps, showUser}) => {

    return (
        <div>
            <h1> {userProps.id} - {userProps.name}</h1>
            <button onClick={() => showUser (userProps)}>Click</button>
        </div>
    )
}

export {User}