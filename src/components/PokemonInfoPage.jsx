import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { POKEMON_DATA_API, POKEMON_DATA_SUFFIX_ALLPOKEMONS } from "../utils/constants"


function PokemonInfoPage(props) {


    const { poke } = useParams()
    // const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)





    // const [pokemonUrl, setPokemonURl] = useState([

    //     {

    //     }
    // ]

    // )
    const [pokemon, setPokemon] = useState(
    //     [
    //     {
    //         name: ""
    //     }
    // ]
    )


    useEffect(
        () => {
            setLoading(true)
            // fetch(POKEMON_DATA_SUFFIX_ALLPOKEMONS + offset)
            fetch(POKEMON_DATA_API + "/" + poke)
                .then(res => res.json())
                .then(data => { setPokemon(data) })
                .finally(() => setTimeout(() => setLoading(false), 1000))


        }, [])
        // }, [offset])
    // useEffect(() => {

    //     // if (pokemon.length > 0) {
    //         pokemon.map((pokemons) => {
    //             const POKEMON_ARRAY = POKEMON_DATA_API + pokemons.name

    //             fetch(POKEMON_ARRAY)
    //                 .then(res => res.json())
    //                 .then(data => { setPokemonURl(oldData => [...oldData, data]) })



    //         })
    //     // }
    // }, [pokemon])



    // pokemonUrl.sort(function (a, b) { return a.id - b.id });
    // let pokemonDetail = pokemonUrl.find(({ name }) => name == poke)




    //Rendering



    return (
        <div id="InfoPage">
            <div id="MaskforInfoPage"></div>
            <div id="MaskforInfoPage2"></div>
            <h1 align="center">{poke}</h1>
            {loading && <img id="LoadingImg2" src="/src/assets/Pokeball.png"></img>}
            {!loading && <img className="Front" src={pokemon?.sprites.front_default}></img>}

            <h3>Types</h3>
            <p>Type1:{pokemon?.types[0].type.name}</p>
            <p style={{opacity: pokemon?.types[1]?.type.name == undefined ? 0 : 1}}>Type2:{pokemon?.types[1]?.type.name}</p>


            <h3 align="center">Stats</h3>
            <p>HP:{pokemon?.stats[0].base_stat}</p>
            <p >ATK:{pokemon?.stats[1].base_stat}</p>
            <p>DEF:{pokemon?.stats[2].base_stat}</p>
            <p>SP ATK:{pokemon?.stats[3].base_stat}</p>
            <p>SP DEF:{pokemon?.stats[4].base_stat}</p>
            <p>SPEED:{pokemon?.stats[5].base_stat}</p>
            <br></br>

            <h3 align="center">Cry</h3>
            <audio controls align="center" src={pokemon?.cries.latest}></audio>
            <br></br>

            <Link to="/pokemon"><h3>Go back</h3></Link>
        </div>
    )
}


export default PokemonInfoPage;