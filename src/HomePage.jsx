import { useState, useEffect } from "react";
import "./HomePage.css"
import "./App.css"
// import { PokemonCard } from "./App";
function HomePage(){
    function Pokemons() {
        const [limit, setLimit] = useState(4)
        const [offset, setOffset] = useState(
            Math.floor(Math.random() * (0+1302))
        )
        const [loading, setLoading] = useState(false)
       
        const POKEMON_DATA_SUFFIX = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=`
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
           
            .finally(() => setTimeout(() => setLoading(false),2000))
            
            console.log(offset)
            setOffset()
         
            },[])
           useEffect(() =>  
           {
           
           pokemon.map((pokemons)=> {
            const POKEMON_ARRAY = POKEMON_DATA_API+pokemons.name
       
            fetch(POKEMON_ARRAY) 
            .then(res => res.json() ) 
            .then(data => {setPokemonURl(oldData =>[...oldData, data])})
         
    
           
           })},[pokemon])
    
   
           
           console.log(pokemonUrl)
         
            return(
                <>
              
                
    
                <div id="Mapper">
                    {
                    
                    pokemonUrl.map((pokemonData) => {
                        
                        
                        
                       if(pokemonData.name != null )
                       {
                        
                       return(
                       <PokemonCard
                       image={pokemonData.sprites.front_default}
                       image2={pokemonData.sprites.front_shiny}
                       name={pokemonData.name}
                       weight={pokemonData.weight}
                       key={pokemonData.id}
                       id={pokemonData.id}
                       cry={pokemonData.cries.latest}   
                       ></PokemonCard>
                       )} }
                   ) }
                   
            
                    
               
                </div>
                <div>
               </div>
               </>
    )}
    
    function PokemonCard(props) {

        return(
            
        
    
           <    div id="Compartment">
                <div id="MaskforCompartment"></div>
                <div id="Mask2forCompartment"></div>
              <h1 align="center">{props.name}</h1>
            <img id="PokeIMG" src={props.image} onMouseOver={e => (e.currentTarget.src =props.image2)} onMouseLeave={e => (e.currentTarget.src =props.image )}></img>      
            <h2>Details</h2>
            
            {/* <h3>Weight:{pokemon.weight}</h3>
            <p>Type 1:{(pokemon.types[0].slot)}</p> */}
               
            </div>
       
            
    
        )
  
  
}

    return(
        <>
            <Pokemons/></>
    )
      

}

export default function Home()
{
    return(
        <section>
            <HomePage/>
        </section>
    );
}