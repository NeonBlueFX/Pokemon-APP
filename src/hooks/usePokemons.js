import { useState, useEffect, useCallback } from "react"

import { useLocation } from "react-router-dom"

import { POKEMON_DATA_API } from "../utils/constants";

function usePokemons() {
    const { pathname } = useLocation()
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false)
    const [limit, setLimit] = useState(0)
    const [pokemonUrl, setPokemonURl] = useState([{}])
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
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
    }, [limit, offset])

    useEffect(() => {
        if (pokemon.length < 0) return;

        fetchUrlPokemons()
    }, [pokemon])

    const fetchPokemons = useCallback(async () => {
        try {
            setLoading(true)

            const res = await fetch(POKEMON_DATA_API + `?limit=${limit}&offset=${offset}`)
            const data = await res.json();

            setPokemon(data.results)
        } catch (error) {
            console.log("Ha ocurrido el siguiente bobo buscando pokemones", error)
        } finally {
            setTimeout(() => setLoading(false), 2000)
        }
    }, [limit, offset])

    const fetchUrlPokemons = useCallback(async () => {
        try {
            setLoading(true)

            const pokemonUrlArray = !!pokemonUrl.length ? pokemonUrl : []

            for (let index = 0; index < pokemon.length; index++) {
                const poke = pokemon[index];
                const POKEMON_ARRAY_URL = POKEMON_DATA_API + "/" + poke.name

                if (poke.name == "") return;

                const res = await fetch(POKEMON_ARRAY_URL)
                const data = await res.json()

                pokemonUrlArray.push(data)
            }

            pokemonUrlArray.sort((a, b) => a.id - b.id);

            setPokemonURl(pokemonUrlArray)
        } catch (error) {
            console.log("Ha ocurrido un bobo en el fetch de pokemon url", error)
        } finally {
            setLoading(false)
        }
    }, [pokemon])

    return { loading, pokemonUrl, offset, setOffset };
}

export default usePokemons;