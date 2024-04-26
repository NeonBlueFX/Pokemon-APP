import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { POKEMON_DATA_API, POKEMON_DATA_SUFFIX_ALLPOKEMONS } from "../utils/constants"


function PokemonInfoPage(props) {


    const { poke } = useParams()
    // const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [statHover, setStatHover] = useState(false)
    const IV = 252
    const EV = 255
    const Level = 100
    const handleHover = (hov) => { !!hov }



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




    return (
        <>
        <h1 className=" text-white text-2xl absolute left-[200px] bottom-36 animate-delayedPing">Hover over Stats for Max Stats</h1>
        <div id="InfoPage" className=" shadow-2xl shadow-inner w-[400px] bg-cyan-400 flex flex-col justify-between place-items-center py-6 mb-24 rounded-lg font-semibold px-4">
       
            <div id="MaskforInfoPage2"></div>
            <h1 align="center" className=" font-semibold font-sans text-2xl">{poke}</h1>
            {loading && <img id="LoadingImg2" className="w-24 h-24 animate-spin" src="/src/assets/Pokeball.png"></img>}
            {!loading && <img className="w-24 h-24" src={pokemon?.sprites.front_default}></img>}

            <h3>Types</h3>
            <p>Type1:{pokemon?.types[0].type.name}</p>
            <p style={{ opacity: pokemon?.types[1]?.type.name == undefined ? 0 : 1 }}>Type2:{pokemon?.types[1]?.type.name}</p>

            {
            }
            <h3 className=" mt-12 text-2xl" align="center">Stats</h3>
            <div id="statsID" onMouseOver={() => setStatHover(true)} onMouseOut={() => setStatHover(false)} className=" grid grid-cols-3 grid-rows-2 place-items-center gap-3 rounded-lg bg-cyan-500 px-5 py-6">
            {statHover &&
                <>
                    <p>HP:{0.01 * (2 * pokemon?.stats[0].base_stat + IV + Math.floor(0.25 * EV)) * Level + Level + 10}</p>
                    <p >ATK:{(Math.floor(0.01 * (2 * pokemon?.stats[1].base_stat + IV + Math.floor(0.25 * EV)) * Level) + 5)}</p>
                    <p>DEF:{(Math.floor(0.01 * (2 * pokemon?.stats[2].base_stat + IV + Math.floor(0.25 * EV)) * Level) + 5)}</p>
                    <p>SP ATK:{(Math.floor(0.01 * (2 * pokemon?.stats[3].base_stat + IV + Math.floor(0.25 * EV)) * Level) + 5)}</p>
                    <p>SP DEF:{(Math.floor(0.01 * (2 * pokemon?.stats[4].base_stat + IV + Math.floor(0.25 * EV)) * Level) + 5)}</p>
                    <p>SPEED:{(Math.floor(0.01 * (2 * pokemon?.stats[5].base_stat + IV + Math.floor(0.25 * EV)) * Level) + 5)}</p>
                    </>
            }
              {!statHover &&
                <>
                    <p>HP:{pokemon?.stats[0].base_stat}</p>
                    <p >ATK:{pokemon?.stats[1].base_stat}</p>
                    <p>DEF:{pokemon?.stats[2].base_stat}</p>
                    <p>SP ATK:{pokemon?.stats[3].base_stat}</p>
                    <p>SP DEF:{pokemon?.stats[4].base_stat}</p>
                    <p>SPEED:{pokemon?.stats[5].base_stat}</p>
                    </>
            }
            </div>
            <br></br>

            <h3 className=" mt-12 text-2xl" align="center">Abilities</h3>
            <div className=" grid grid-cols-1 grid-rows-4 place-items-center gap-3 rounded-lg bg-cyan-500 px-16 pt-6">
                <p style={{ display: pokemon?.abilities[0]?.ability.name == undefined ? "none" : "inline" }}>Ability 1:{pokemon?.abilities[0]?.ability.name}</p>
                <p style={{ display: pokemon?.abilities[1]?.ability.name == undefined ? "none": "inline" }}>Ability 2:{pokemon?.abilities[1]?.ability.name}</p>
                <p style={{ display: pokemon?.abilities[2]?.ability.name == undefined ? "none" : "inline" }}>Ability 3:{pokemon?.abilities[2]?.ability.name}</p>
                <p style={{ display: pokemon?.abilities[3]?.ability.name == undefined ? "none": "inline" }}>Ability4:{pokemon?.abilities[3]?.ability.name}</p>

            </div>
            <br></br>

            <h3 align="center">Cry</h3>
            <audio controls align="center" src={pokemon?.cries.latest}></audio>
            <br></br>

            <Link to="/pokemon"><h3>Go back</h3></Link>
        </div>
        </>
    )
}


export default PokemonInfoPage;