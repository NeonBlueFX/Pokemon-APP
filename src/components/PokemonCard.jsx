import {Routes, Route, Link, useLocation} from "react-router-dom"

function PokemonCard(props) {
    const {pathname} = useLocation()
    
    if(pathname == "/")
    {
        return (
    
    <>
                    <div id="Compartment">
                    <div id="MaskforCompartment"></div>
                    <div id="Mask2forCompartment"></div>
                    <h1 align="center">{props.name.toUpperCase()}</h1>
                    <img id="PokeIMG" src={props.image} onMouseOver={e => (e.currentTarget.src = props.image2)} onMouseLeave={e => (e.currentTarget.src = props.image)}></img>
                   
    
                    {/* <h3>Weight:{pokemon.weight}</h3>
                    <p>Type 1:{(pokemon.types[0].slot)}</p> */}
    
                </div>
    </>
    
    
        )
    }
    else
    {
        if(pathname == "/pokemon")
        {
            return (
        
        <>
                        <div id="Compartment">
                        <div id="MaskforCompartment"></div>
                        <div id="Mask2forCompartment"></div>
                        <h1 align="center">{props.name.toUpperCase()}</h1>
                        <img id="PokeIMG" src={props.image} onMouseOver={e => (e.currentTarget.src = props.image2)} onMouseLeave={e => (e.currentTarget.src = props.image)}></img>
                        <Link key={props.id} to={`/pokemon/${props.name}`} align="center"><h2>Details</h2></Link>
        
                        {/* <h3>Weight:{pokemon.weight}</h3>
                        <p>Type 1:{(pokemon.types[0].slot)}</p> */}
        
                    </div>
        </>
        
        
            )
        }
    }



}

export default PokemonCard;