import React from 'react';

const PokemonThumbnail = ({id, name, image, type}) => {
    const style = `thumbContainer ${type}`
    return (
        <div className={style}>
            <div class="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div>
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>

        </div>
    )
}

export default PokemonThumbnail