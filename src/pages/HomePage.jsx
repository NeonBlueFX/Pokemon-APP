
import usePokemons from "../hooks/usePokemons";
import "../styles/HomePage.css"
import "../styles/App.css"

import PokemonCard from "../components/PokemonCard";
function HomePage(){
    const POKEMONFETCH = usePokemons()
    

    return(
        <>
            <h1 className="HomeWelcomeText" align="center">Pokemon Search Engine</h1>
            <h2 className="HomeWelcomeText" align="center">Search for any Pokemon</h2>
            <br></br>
            <br></br>
            <h3  className="HomeWelcomeText"align="center">Featured Pokemons this Session</h3>

            <>
              
                
    
              <div id="Mapper" className="flex flex-row gap-5 pt-10">
                  {
                  
                  POKEMONFETCH.pokemonUrl.map((pokemonData) => {
                      
                      
                      
                     if(pokemonData.name != null )
                     {
                      
                     return(
                     <PokemonCard
                     image={pokemonData.sprites.front_default}
                     image2={pokemonData.sprites.front_shiny}
                     name={pokemonData.name}
             
                     key={pokemonData.id}
                     
                     
                     ></PokemonCard>
                     )} }
                 ) }
                 
          
                  
             
              </div>
              <div>
             </div>
             </>
          </>
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