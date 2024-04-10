import { useState, useEffect } from "react"
import "./App.css"

const POKEMON_DATA_API_SUFFIX = `https://pokeapi.co/api/v2/pokemon/`


function Pokemons() {
    const [pokemon, setPokemon] = useState([
        {
            name: "",
        }
    ]
    )
useEffect(
    () => {
        
        fetch(POKEMON_DATA_API_SUFFIX)
        .then(res => res.json())
        .then(data => {setPokemon(data.results)})

        },[])
       
        return(
            <div>
            {pokemon.map((pokemons)=> {
                console.log(pokemons);
             return(
                <PokemonCard
                name={pokemons.name}
               
                ></PokemonCard>
             )
            })}
            </div>
        )
    }

   
    function PokemonCard(props) {

           
            return(
                <div id="Compartment">
                <h1>Pokemon</h1>
                <h2>Name:{props.name}</h2>
                <h2>ID: {props.id}</h2>
                {/* <h3>Weight:{pokemon.weight}</h3>
                <p>Type 1:{(pokemon.types[0].slot)}</p> */}
                   
                </div>
        
            )
      
      
    }
    
export function PokemonApp()
{

    return(
        <main>
       <Pokemons/>
        </main>
    )
}