import { useState, useEffect } from "react"

import { Link, useParams } from "react-router-dom"

import { POKEMON_DATA_SUFFIX_SEARCH } from "../utils/constants"

function SearchBar() {


    const [focus, setFocus] = useState(false)

    const [pokemonSearch, setPokemonSearch] = useState([{}])
    const [filtereData, setFilteredData] = useState([])
    const [pokemonSearchValue, setPokemonSearchValue] = useState("")
    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setPokemonSearchValue(searchWord)

        if (searchWord == "") {
            setFilteredData([])

            return;
        }

        const newFilter = pokemonSearch.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());

        })

        // setPokemonSearchValue(searchWord)
        // if (searchWord == "") {
        //     setFilteredData([])
        // }
        // else {
            setFilteredData(newFilter);
        // }
    }



    useEffect(
        () => {

            fetch(POKEMON_DATA_SUFFIX_SEARCH)
                .then(res => res.json())
                .then(data => { setPokemonSearch(data.results) })



        }, [])

    const searchFill = () => {
        setPokemonSearchValue("")
        filtereData.filter("")

    };
    function pageValidation(valid) {

        let validation = filtereData.filter(pokemon => pokemon.name == valid)
        let validation2 = validation.reduce((accumulator, currentValue) => currentValue.name, "")

        if (validation2 != valid || valid === "") {
            return "error";
        }
        else {
            return valid;
        }
    }
        const focusValidation = () => {
            setFocus(true)
        }
        const blurValidation = () => {
            setFocus(false)
        }
    return (
        <div>

            <div>
                <input type="text" value={pokemonSearchValue} id="searchbar" placeholder="Search a Pokemon" onChange={handleFilter} onFocus={(event) =>focusValidation(event) } onBlur={() => blurValidation()} className="w-[500px] h-12 focus:outline-none pl-3"></input>
                <Link onClick={() => setPokemonSearchValue("")} className=" relative h-[50px] left-[500px] bottom-[49px] w-[55px] font-semibold place-content-center bg-blue-300 block   " to={`/pokemon/${pageValidation(pokemonSearchValue.toLowerCase())}`}><input id="SearchSubmitButton" type="submit"></input></Link>
            </div>
            {filtereData.length != 0 && (
                <div className="absolute bg-slate-100 w-[300px] h-[300px]  mt-[-50px] overflow-hidden overflow-y-auto text-lg pt-4">

                    {filtereData.map((pokemonSearched) => {
                        return <Link className="w-full h-1/4 flex" onClick={() => searchFill()} to={`/pokemon/${pokemonSearched.name}`}><div ><p>{pokemonSearched.name}</p> </div></Link>
                    })}

                </div>
            )}
        </div>

    )
}

export default SearchBar;