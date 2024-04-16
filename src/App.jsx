import { useState, useEffect } from "react"
import "./App.css"
import {useParams,Link, BrowserRouter, Route, Routes } from "react-router-dom";


function Pokemons() {
    const [limit, setLimit] = useState(0)
    const [offset, setOffset] = useState(0)
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

     
        },[offset])
       useEffect(() =>  
       {
       
       pokemon.map((pokemons)=> {
        const POKEMON_ARRAY = POKEMON_DATA_API+pokemons.name
   
        fetch(POKEMON_ARRAY) 
        .then(res => res.json() ) 
        .then(data => {setPokemonURl(oldData =>[...oldData, data])})
     

       
       })},[pokemon])



       pokemonUrl.sort(function(a,b){return a.id-b.id});
     
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
            {loading && <img id="LoadingImg" src="./src/Pokeball.png"></img>}
            {!loading && <button id="loadingButton" onClick={() => setOffset(offset+20) (sessionStorage.setItem("pokemonUrl", offset))}>Mas Pokemon</button>}
     
            </div>
            </>
          
        )

    }
    

            
        
    function SearchBar() {

        
        const POKEMON_DATA_SUFFIX_SEARCH = `https://pokeapi.co/api/v2/pokemon?limit=10000000`

        
        const[pokemonSearch, setPokemonSearch] = useState(
            [
                {
    
                }
            ]
        )
        const[filtereData, setFilteredData] = useState([])

        const [pokemonSearchValue, setPokemonSearchValue] = useState("")
        const handleFilter = (event) => {
            const searchWord = event.target.value;

            const newFilter = pokemonSearch.filter((value) =>{
                return value.name.toLowerCase().includes(searchWord.toLowerCase());
           
            })
            
            setPokemonSearchValue(searchWord)
            if(searchWord == "") {
                setFilteredData([])
            }
            else
            {
                setFilteredData(newFilter);
            }
        }

        

        useEffect(
            () => {
               
                fetch(POKEMON_DATA_SUFFIX_SEARCH)
                .then(res => res.json())
                .then(data => {setPokemonSearch(data.results)})
           
             
             
                },[])

                const searchFill = () => {
                     setPokemonSearchValue("")
                     filtereData.filter("")

                };
        
             
        return(
            <div>
                
                <div>
            <input  type="text" value={pokemonSearchValue}id="searchbar" placeholder="Search a Pokemon" onChange={handleFilter}></input>
            <Link onClick={() => setPokemonSearchValue("")} to={`/pokemon/${pokemonSearchValue}`}><input type="submit"></input></Link>
                </div>
                {filtereData.length != 0 && (
                 <div className="dataResult">
                    
                    {filtereData.map((pokemonSearched) =>{
                       return <Link className="dataItem" onClick={() =>  searchFill()} to={`/pokemon/${pokemonSearched.name}`}><div ><p>{pokemonSearched.name}</p> </div></Link>
                    })}
                
                </div>
    )}
            </div>
            
        )
        }

    

   
    function PokemonCard(props) {

            return(
                
            
        
                <Routes>
                <Route exact path="/" element={        <div id="Compartment">
                    <div id="MaskforCompartment"></div>
                    <div id="Mask2forCompartment"></div>
                <Link key={props.id} to={`/pokemon/${props.name}`} align="center">{props.name.toUpperCase()}</Link>
                <img id="PokeIMG" src={props.image} onMouseOver={e => (e.currentTarget.src =props.image2)} onMouseLeave={e => (e.currentTarget.src =props.image )}></img>      
                <h2>Weight:{props.weight}</h2>
                <h2>ID: {props.id}</h2>
                {/* <h3>Weight:{pokemon.weight}</h3>
                <p>Type 1:{(pokemon.types[0].slot)}</p> */}
                   
                </div>} />
                <Route exact path={`/pokemon/${props.name}`} />
                </Routes>
            
                
        
            )
      
      
    }

function PokemonInfoPage (props) {


const { poke } = useParams()
const [limit, setLimit] = useState(100000)
    const [offset, setOffset] = useState(0)
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
        .finally(() => setTimeout(() => setLoading(false),1000))
        console.log(offset)

     
        },[offset])
       useEffect(() =>  
       {
       
       pokemon.map((pokemons)=> {
        const POKEMON_ARRAY = POKEMON_DATA_API+pokemons.name
   
        fetch(POKEMON_ARRAY) 
        .then(res => res.json() ) 
        .then(data => {setPokemonURl(oldData =>[...oldData, data])})
     

       
       })},[pokemon])



       pokemonUrl.sort(function(a,b){return a.id-b.id});
      let pokemonDetail = pokemonUrl.find(({name}) => name == poke ) 
      console.log(pokemonDetail)
    


       //Rendering


    return(
    <div id="InfoPage">
        <div id="MaskforInfoPage"></div>
        <div id="MaskforInfoPage2"></div>
        <h1 align="center">{poke}</h1>
        <img className="Front" src={pokemonDetail?.sprites.front_default}></img>

        <h3>Types</h3>
        <p>Type1:{pokemonDetail?.types[0].type.name}</p>
        <p>Type2:{pokemonDetail?.types[1]?.type.name}</p>


        <h3 align="center">Stats</h3>
        <p>HP:{pokemonDetail?.stats[0].base_stat}</p>
        <p >ATK:{pokemonDetail?.stats[1].base_stat}</p>
        <p>DEF:{pokemonDetail?.stats[2].base_stat}</p>
        <p>SP ATK:{pokemonDetail?.stats[3].base_stat}</p>
        <p>SP DEF:{pokemonDetail?.stats[4].base_stat}</p>
        <p>SPEED:{pokemonDetail?.stats[5].base_stat}</p>

        <audio controls align="center" src={pokemonDetail?.cries.latest}></audio>
    </div>
    )
}
    
export function PokemonApp()
{

    return(

    
        <main>
        <img id="logo" src="./src/Pokemon-LOGO.png"></img>
        <BrowserRouter>
   
        <SearchBar/>
      
      
     
        <Routes>
        <Route path="/" element={<Pokemons/>}></Route>
        <Route path="/pokemon" element={<Pokemons/>}></Route>
        <Route path="/pokemon/:poke" element={<PokemonInfoPage/>}></Route>
        </Routes>
     </BrowserRouter>
     </main>
     
    )
}

