import { Link, useLocation } from "react-router-dom";
import "../styles/header.css"



function Header() {

    const home = useLocation()
    if(home.pathname == "/pokemon")
    {
        return (
            <div className='px-2 flex flex-row w-full h-24 py-6 inset-y-0 absolute inset-x-0 space-x-10 bg-gray-800 text-white overflow-hidden' >
                <hr className="bg-white w-full absolute bottom-0  justify-self-center animate-openslide"></hr>
                <Link to="/"><p>Home</p></Link>
                <Link reloadDocument className="place-self-start"><p>Pokemons</p></Link>
                <div className="inset-x-0 bottom-5  absolute flex w-full place-content-center pointer-events-none">
                <img id="logo" className="w-40 h-14 mt-12 grayscale brightness-150 hover:grayscale-0 hover:brightness-100 " src="/src/assets/Pokemon-LOGO.png"></img>
                </div>
            </div>
        )
    }
    else
    return (
        <div className='px-2 flex flex-row w-full h-24 py-6 inset-y-0 absolute inset-x-0 space-x-10 bg-gray-800 text-white overflow-hidden' >
            <hr className="bg-white w-full absolute bottom-0  justify-self-center animate-openslide"></hr>
            <Link to="/"><p>Home</p></Link>
            <Link to="/pokemon" className="place-self-start"><p>Pokemons</p></Link>
            <div className="inset-x-0 bottom-5  absolute flex w-full place-content-center pointer-events-none">
            <img id="logo" className="w-40 h-14 mt-12 grayscale brightness-150 hover:grayscale-0 hover:brightness-100 " src="/src/assets/Pokemon-LOGO.png"></img>
            </div>
        </div>
    )
}

export default Header;