import { Link, useLocation} from "react-router-dom"

function PokemonCard(props) {
    const {pathname} = useLocation()
    
    if(pathname == "/")
    {
        return (
    
    <>
                <div id="Compartment" className=" rounded-md flex flex-col border gap-4   w-[260px] h-auto place-items-center py-18 justify-between mb-[50px] pb-3 pl-3 z-10" >
                        <div id="MaskforCompartment" className="h-[96px] w-[260px] bg-slate-400 absolute mt-[40px] z-[-1] mr-3"></div>
                        <div id="Mask2forCompartment" className=" rounded-md h-[190px] w-[260px] bg-gray-500 absolute z-[-2] mr-3 "></div>
                        <h1 align="center">{props.name.toUpperCase()}</h1>
                        <img id="PokeIMG" className=" w-24 h-24" src={props.image} onMouseOver={e => (e.currentTarget.src = props.image2)} onMouseLeave={e => (e.currentTarget.src = props.image)}></img>
                      
        
    
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
                        <div id="Compartment" className=" flex flex-col border gap-4   w-[260px] h-auto place-items-center py-18 justify-between mb-[50px] pb-3 pl-3 z-10" >
                        <div id="MaskforCompartment" className="h-[96px] w-[260px] bg-slate-400 absolute mt-[40px] z-[-1] mr-3"></div>
                        <div id="Mask2forCompartment" className=" h-[190px] w-[260px] bg-gray-500 absolute z-[-2] mr-3 "></div>
                        <h1 align="center">{props.name.toUpperCase()}</h1>
                        <img id="PokeIMG" className=" w-24 h-24" src={props.image} onMouseOver={e => (e.currentTarget.src = props.image2)} onMouseLeave={e => (e.currentTarget.src = props.image)}></img>
                        <Link key={props.id} className="z-20 pointer-events-auto" to={`/pokemon/${props.name}`} align="center"><h2 className="font-semibold">Details</h2></Link>
        
                        {/* <h3>Weight:{pokemon.weight}</h3>
                        <p>Type 1:{(pokemon.types[0].slot)}</p> */}
        
                    </div>
        </>
        
        
            )
        }
    }



}

export default PokemonCard;