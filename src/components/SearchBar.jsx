import { useState, useEffect } from "react"

import { Link, useParams } from "react-router-dom"

import { POKEMON_DATA_SUFFIX_SEARCH } from "../utils/constants"

function SearchBar() {




    const [pokemonSearch, setPokemonSearch] = useState(
        [
            {

            }
        ]
    )
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
    function PageValidation(valid) {

        let validation = filtereData.filter(pokemon => pokemon.name == valid)
        let validation2 = validation.reduce((accumulator, currentValue) => currentValue.name, "")

        if (validation2 != valid) {
            return "error";
        }
        else {
            return valid;
        }
    }


    return (
        <div>

            <div>
                <input type="text" value={pokemonSearchValue} id="searchbar" placeholder="Search a Pokemon" onChange={handleFilter}></input>
                <Link onClick={() => setPokemonSearchValue("")} to={`/pokemon/${PageValidation(pokemonSearchValue.toLowerCase())}`}><input id="SearchSubmitButton" type="submit"></input></Link>
            </div>
            {filtereData.length != 0 && (
                <div className="dataResult">

                    {filtereData.map((pokemonSearched) => {
                        return <Link className="dataItem" onClick={() => searchFill()} to={`/pokemon/${pokemonSearched.name}`}><div ><p>{pokemonSearched.name}</p> </div></Link>
                    })}

                </div>
            )}
        </div>

    )
}

export default SearchBar;