import { useState, useEffect } from "react"
import "./App.css"
import InfiniteScroll from 'react-infinite-scroll-component';



function Pokemons() {
    const [offset, setOffset] = useState(1020)
    const [loading, setLoading] = useState(false)
    const POKEMON_DATA_SUFFIX = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=`
    const POKEMON_DATA_API = `https://pokeapi.co/api/v2/pokemon/`
    
    
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
        setLoading(true)
        fetch(POKEMON_DATA_SUFFIX+offset)
        .then(res => res.json())
        .then(data => {setPokemon(data.results)})
        .finally(() => setTimeout(() => setLoading(false),1000))
        console.log(offset)

     
        },[offset])
       useEffect(() =>  
       {
       
       pokemon.map((pokemons)=> {
        const POKEMON_ARRAY = POKEMON_DATA_API+pokemons.name
   
        fetch(POKEMON_ARRAY) 
        .then(res => res.json() ) 
        .then(data => {setPokemonURl(oldData =>[...oldData, data])})
     
      
       
       })},[pokemon])



       pokemonUrl.sort(function(a,b){return a.id-b.id});
        return(
            <>
            <SearchBar/>
            <div id="Mapper">
                {
              
                pokemonUrl.map((pokemonData) => {
                   
                   if(pokemonData.name != null)
                   {
                    
                   return(
                   <PokemonCard
                   image={pokemonData.sprites.front_default}
                   name={pokemonData.name}
                   weight={pokemonData.weight}
                   key={pokemonData.id}
                   id={pokemonData.id}
                   ></PokemonCard>
                   )} }
               ) }
               
        
                
           
            </div>
            <div>
            {loading && <p>Cargando...</p>}
            {!loading && <button id="loadingButton" onClick={() => setOffset(offset+20)}>Mas Pokemon</button>}
            </div>
            </>
          
        )
    
    }
    

            
        
    function SearchBar() {
    
        return(
            
            <input type="text" placeholder="Search a Pokemon"></input>
            
        )
        }

    

   
    function PokemonCard(props) {

           
            return(
                <div id="Compartment">
                <h1>Pokemon</h1>
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
        <img id="logo" src="./src/Pokemon-LOGO.png"></img>
       <Pokemons/>
     
        </main>
    )
}
