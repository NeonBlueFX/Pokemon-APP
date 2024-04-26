import { useState, useEffect, useCallback } from "react"

import { useLocation } from "react-router-dom"

import { POKEMON_DATA_API, POKEMON_DATA_TYPE } from "../utils/constants";

import TypeButton from "../components/TypeButton";


function usePokemons() {
    const { pathname } = useLocation()
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(0)
    const [pokemonUrl, setPokemonURl] = useState([{}])
    const [pokemon, setPokemon] = useState([])
    const [isToggled, setisToggled] = useState(false)
    const [pokemonType, setPokemonType] = useState("")
    const [pokemonTypeArray, setPokemonTypeArray] = useState([{}])


    const typeFetch = useCallback(async () => {
        try {
            const res = await fetch(POKEMON_DATA_TYPE)
            const data = await res.json();

            setPokemonTypeArray(data.results)

        } catch (error) {
            console.log("error obteniendo tipos" + error)


        }
    }, [])

    useEffect(() =>{
        console.log("pokemon")
    },[pokemon])

    useEffect(() => {

        typeFetch()
        if (pathname == "/") {
            setLimit(4)
            setOffset(Math.floor(Math.random() * (0 + 1302)))
        }

        if (pathname == "/pokemon") {
            setLimit(20)
        }
    }, [])

    useEffect(() => {
        if (limit > 0) {
            fetchPokemons()
        }
    }, [limit, offset, isToggled, pokemonType])

    useEffect(() => {

        if (pokemon?.length < 0) return;

        fetchUrlPokemons()
    }, [pokemon])



    const fetchPokemons = useCallback(async () => {

        try {
            setLoading(true)
      
            if (isToggled === true) {
                const res = await fetch(POKEMON_DATA_TYPE + "/" + pokemonType.toLowerCase())
                const data = await res.json();
                setPokemon(data.pokemon)
            }
            else {

                const res = await fetch(POKEMON_DATA_API + `?limit=${limit}&offset=${offset}`)
                const data = await res.json();
                setPokemon(data.results)
        

            }


        } catch (error) {
            console.log("Ha ocurrido el siguiente bobo buscando pokemones", error)
        } finally {
            setTimeout(() => setLoading(false), 2000)
        }
    }, [limit, offset, isToggled, pokemonType])

    const fetchUrlPokemons = useCallback(async () => {
        try {
            setLoading(true)

            let pokemonUrlArray = !!pokemonUrl.length && isToggled != true ? pokemonUrl : []

            for (let index = 0; index < pokemon.length; index++) {

                const poke = pokemon[index];

                const POKEMON_ARRAY_URL = isToggled === true ? POKEMON_DATA_API + "/" + poke.pokemon.name : POKEMON_DATA_API + "/" + poke.name

                if (poke.name == "" || poke.pokemon?.name == "") return;

                const res = await fetch(POKEMON_ARRAY_URL)
                const data = await res.json()


                pokemonUrlArray.push(data)



            }

            pokemonUrlArray.sort((a, b) => a.id - b.id);
          
            //    if(pokemonType == "")
            //    {
            //     setOffset(0)
            //    }
                
                    setPokemonURl(pokemonUrlArray)
                   



        } catch (error) {
            console.log("Ha ocurrido un bobo en el fetch de pokemon url", error)
        } finally {
            setLoading(false)
        }
    }, [pokemon])

    return { loading, pokemonUrl, offset, setOffset, isToggled, setisToggled, pokemonType, setPokemonType, pokemonTypeArray };
}

export default usePokemons;