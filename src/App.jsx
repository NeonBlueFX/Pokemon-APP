import { useState, useEffect } from "react"


function Pokemons() {
    const [pokemon, setPokemon] = useState(
        {
            name: "Bulbasaur",
            info: "Description",
            type: "Grass"
        }
    )

    return(
        <div id="Compartment">
        <h1>Pokemon</h1>
        <h2>{pokemon.name}</h2>
        <p>{pokemon.info}</p>
        <p>{pokemon.type}</p>
        </div>

    )
}

export function PokemonApp()
{
    
    return(
        <main>
            <Pokemons/>
            <Pokemons/>
        </main>
    )
}