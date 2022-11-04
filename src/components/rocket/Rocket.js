const Rocket = ({rocketProps}) => {
    return (
        <div>
            <h3>{rocketProps.mission_name} -- {rocketProps.name}</h3>
            <img src={rocketProps.links.mission_patch_small} alt={rocketProps.mission_name}/>
        </div>
    )
}

export {Rocket}