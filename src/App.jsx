import { useState, useEffect } from "react"
import "./App.css"

const POKEMON_DATA_SUFFIX = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=20`
const POKEMON_DATA_API = `https://pokeapi.co/api/v2/pokemon/`



function Pokemons() {
    const [pokemonUrl, setPokemonURl] = useState([

        {
 
        }
    ]
    )
    const [pokemon, setPokemon] = useState([
        {
            name: "",
        }
    ]
    )
useEffect(
    () => {
        
        fetch(POKEMON_DATA_SUFFIX)
        .then(res => res.json())
        .then(data => {setPokemon(data.results)})
      

     
        },[])
       useEffect(() =>
       {
       pokemon.map((pokemons)=> {
        const POKEMON_ARRAY = POKEMON_DATA_API+pokemons.name
   
        fetch(POKEMON_ARRAY) .then(res => res.json() ) .then(data => {setPokemonURl(oldData =>[...oldData, data])})
       
       })
   

       
    },[pokemon])

   
        return(
            <div id="Mapper">
            { 
                
                pokemonUrl.map((pokemonData) => {
                   
                    if(pokemonData.name != null)
                    {
                        console.log(pokemonData)
                    return(
                    <PokemonCard
                    image={pokemonData.sprites.front_default}
                    name={pokemonData.name}
                    weight={pokemonData.weight}
                    key={pokemonData.id}
                    id={pokemonData.id}
                    ></PokemonCard>
                    )
                }
                })
            
                   
                
                 
            
        
    
                }
                

            </div>
        )
    }

            
        
    
    
    

   
    function PokemonCard(props) {

           
            return(
                <div id="Compartment">
                <h1 text-content="center">Pokemon</h1>
                <img id="PokeIMG" src={props.image}></img>
                <h2>Name:{props.name}</h2>
                <h2>Weight:{props.weight}</h2>
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
