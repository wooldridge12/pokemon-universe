import React, {useEffect, useState} from 'react';
import './pokemon-universe.css';

function PokemonUniverse() {

    const [allPokemon, setAllPokemon] = useState([]);

    // Setting loadMore to pokemon api. Limiting the return to only 20 objects at a time.
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

    // Here is a async get function. I am fetching loadmore which is = to api. result or res = await fetch loadmore. then json that.
    const getAllPokemon = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        // When you console.log data you will notice an object with next in it we save that here.
        // Notice with each pokemon will be a id at the end of the url call. So we need to call the api again and pass a var to it.
        setLoadMore(data.next)

        function createPokemonObject(result) {
            // interate through each rresult for pokemon.name
            result.forEach( async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()

                // get me list spread it out and at the end just add the new data object.
                setAllPokemon(currentList => [...currentList, data])

            })
        }
        // we are passing data.result which you can see in the dev tools
        createPokemonObject(data.results)
        
        // console.log(data)
        await console.log(allPokemon)
    }

    useEffect(() => {
        getAllPokemon()
    }, [])
    
    return(
        <div className='appContainer'>
            <h1>Mikey's Pokemon App!</h1>
            <div className='pokemonContainer'>
                <div className='allPokemonContainer'>
                    { allPokemon.map((pokemon, index) => 
                        <section key={`pokemon--${index}`} className='pokemonCard'> 
                            <div className='pokemonName'>{pokemon.name}</div>
                            <div className='pokemonType'>Type: {pokemon.types[0].type.name}</div>
                            <img src={pokemon.sprites.other.dream_world.front_default} />
                        </section>
                        )}
                </div>
                <button className='loadMore' onClick={() => getAllPokemon()}>Load More</button>
            </div>
        </div>
    )
}

export default PokemonUniverse;