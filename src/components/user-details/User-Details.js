const UserDetails = ({userProps}) => {
    return (
        <div>
            <h3>{userProps.name}</h3>
            <p>{userProps.address.city}</p>
        </div>
    )
}

export {UserDetails}