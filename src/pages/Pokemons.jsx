
import SearchBar from "../components/SearchBar"
import PokemonCard from "../components/PokemonCard";    
import usePokemons from "../hooks/usePokemons"

function Pokemons() {
    const POKEMONFETCH = usePokemons()

  
    return (
        <>


            <SearchBar />
            <div id="Mapper">
                {

                   POKEMONFETCH.pokemonUrl.map((pokemonData) => {


                        if (pokemonData.name != null) {

                            return (
                                <PokemonCard
                                    image={pokemonData.sprites.front_default}
                                    image2={pokemonData.sprites.front_shiny}
                                    name={pokemonData.name}
                                    key={pokemonData.id}
                                ></PokemonCard>
                            )
                        }
                    }
                    )}




            </div>
            <div id="footerbuttons">
                {usePokemons.loading && <img id="LoadingImg" src="/src/assets/Pokeball.png"></img>}
                {!usePokemons.loading && <button id="loadingButton" onClick={() => POKEMONFETCH.setOffset(POKEMONFETCH.offset + 20)}>More Pokemon</button>}
                {!usePokemons.loading && <a id="GoBackButton" href="#header">Go back</a>}

            </div>
        </>

    )

}


export default Pokemons;