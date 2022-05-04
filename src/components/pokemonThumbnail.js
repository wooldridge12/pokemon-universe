import React from "react";

const PokemonThumbnail = (id, name, image, type) => {
    return (
        <div className="thumbContainer">

            <div className="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div className="pokemonName">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>

        </div>
    )
}

export default PokemonThumbnail;