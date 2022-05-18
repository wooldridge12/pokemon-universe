import React from 'react';

const PokemonThumbnail = ({id, name, image, type}) => {
    const style = `thumbContainer ${type}`
    return (
        <div className={style}>
        <div className="pokemonCard">
            <div class="number">
                <small>#0{id}</small>
            </div>
            <img src={image} alt={name} />
            <div>
                <h3 className='pokemonName'>{name}</h3>
                <small className='pokemonType'>Type: {type}</small>
            </div>
            </div>
        </div>
    )
}

export default PokemonThumbnail