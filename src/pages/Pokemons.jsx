import TypeButton from "../components/TypeButton";
import SearchBar from "../components/SearchBar"
import PokemonCard from "../components/PokemonCard";
import usePagination from "../hooks/usePagination";
import usePokemons from "../hooks/usePokemons"
import Pagination from "../components/Pagination";
import { Link, useParams, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";



function Pokemons() {

    const PAGING = usePagination()
    const POKEMONFETCH = usePokemons()
 

    const typeHandler = (val) => {

        POKEMONFETCH.setisToggled(true)
        POKEMONFETCH.setPokemonType(val.name)
    }

    const POKEPAGING = POKEMONFETCH.pokemonUrl.slice(PAGING.indexofFirstPost, PAGING.indexofLastPost)

    const paginate = (pageNumber) => PAGING.setCurrentPage(pageNumber)

   if(POKEMONFETCH.isToggled === true)
   {
    return (
        <>


            <SearchBar />
            <div className=" flex flex-row justify-between gap-6">
                {

                    POKEMONFETCH.pokemonTypeArray.map((pokemonTypeData, index) => {
                        return (
                            <TypeButton
                                key={index}
                                label={pokemonTypeData.name}
                                handler={() => typeHandler(pokemonTypeData)}
                            ></TypeButton>

                        )
                    })}
                {/* <TypeButton key={22} label={"All pokemons"} handler={() => allPokemons()}></TypeButton> */}
            </div>
            <div id="Mapper" className="flex flex-row flex-wrap justify-center w-30 h-auto gap-5 pt-10  rounded-md bg-gray-600">

                {
                    POKEPAGING.map((pokemonData) => {


                        if (pokemonData.name != null && pokemonData.sprites.front_default != null) {

                            return (
                                <PokemonCard
                                    image={pokemonData.sprites.front_default}
                                    image2={pokemonData.sprites.front_shiny}
                                    name={pokemonData.name}
                                    key={pokemonData.id}
                                ></PokemonCard>
                            )
                        }
                        // else
                        // {
                        //     console.log(POKEMONFETCH.offset)
                        //     POKEMONFETCH.setOffset(POKEMONFETCH.offset + 20)
                        // }
                    }
                    )}




            </div>
            {POKEMONFETCH.pokemonType == "" &&
            <div id="footerbuttons" className="flex flex-row gap-5 items-center ml-40 pb-4">
                {POKEMONFETCH.loading && <img id="LoadingImg" src="/src/assets/Pokeball.png"></img>}
                {!POKEMONFETCH.loading && <button id="loadingButton" className="border text-gray-300 w-50 px-7 pb-4 h-12 bg-slate-600"  onClick={() => POKEMONFETCH.setOffset(POKEMONFETCH.offset + 20)}>More Pokemon</button>}
                {!POKEMONFETCH.loading && <a id="GoBackButton" className="border text-gray-300 w-[250px] px-9 pt-3 h-12 bg-slate-600"  href="#header">Go back</a>}
                <div className=" container mt-5">
            
                   

                </div>
            
            </div>}
            {POKEMONFETCH.pokemonType !="" &&
                <div>
                 <Pagination postperPage={PAGING.postsPerPage} totalPosts={POKEMONFETCH.pokemonUrl.length} paginate={paginate}></Pagination>
                 <p align="center" className=" text-gray-200 font-semibold">Page:{PAGING.currentPage}</p>
                 </div>
            }
        </>

    )

   }
   else
   {
    return (
        <>


            <SearchBar />
            <div className=" flex flex-row justify-between gap-6">
                {

                    POKEMONFETCH.pokemonTypeArray.map((pokemonTypeData, index) => {
                        return (
                            <TypeButton
                                key={index}
                                label={pokemonTypeData.name}
                                handler={() => typeHandler(pokemonTypeData)}
                            ></TypeButton>

                        )
                    })}
                {/* <TypeButton key={22} label={"All pokemons"} handler={() => allPokemons()}></TypeButton> */}
            </div>
            <div id="Mapper" className="flex flex-row flex-wrap justify-center w-30 h-auto gap-5 pt-10  rounded-md bg-gray-600">

                {
                    POKEMONFETCH.pokemonUrl.map((pokemonData) => {


                        if (pokemonData.name != null && pokemonData.sprites.front_default != null) {

                            return (
                                <PokemonCard
                                    image={pokemonData.sprites.front_default}
                                    image2={pokemonData.sprites.front_shiny}
                                    name={pokemonData.name}
                                    key={pokemonData.id}
                                ></PokemonCard>
                            )
                        }
                        // else
                        // {
                        //     console.log(POKEMONFETCH.offset)
                        //     POKEMONFETCH.setOffset(POKEMONFETCH.offset + 20)
                        // }
                    }
                    )}




            </div>
            {POKEMONFETCH.pokemonType == "" &&
            <div id="footerbuttons" className="flex flex-row gap-5 items-center ml-40 pb-4">
                {POKEMONFETCH.loading && <img id="LoadingImg" src="/src/assets/Pokeball.png"></img>}
                {!POKEMONFETCH.loading && <button id="loadingButton" className="border text-gray-300 w-50 px-7 pb-4 h-12 bg-slate-600"  onClick={() => POKEMONFETCH.setOffset(POKEMONFETCH.offset + 20)}>More Pokemon</button>}
                {!POKEMONFETCH.loading && <a id="GoBackButton" className="border text-gray-300 w-[250px] px-9 pt-3 h-12 bg-slate-600"  href="#header">Go back</a>}
                <div className=" container mt-5">
            
                   

                </div>
            
            </div>}
            {POKEMONFETCH.pokemonType !="" &&
                <div>
                 <Pagination postperPage={PAGING.postsPerPage} totalPosts={POKEMONFETCH.pokemonUrl.length} paginate={paginate}></Pagination>
                 <p align="center" className=" text-gray-200 font-semibold">Page:{PAGING.currentPage}</p>
                 </div>
            }
        </>

    )

   }
   

}

export default Pokemons;