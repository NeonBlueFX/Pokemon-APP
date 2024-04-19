import { Link, useLocation } from "react-router-dom";
import "../styles/header.css"


function Header() {

    const home = useLocation()

    console.log(home, home.pathname ==="/");
    return (
        <div className="HeaderComponent" >  
            <Link to="/"><p>Home</p></Link>
            <Link to="/pokemon"><p>Pokemons</p></Link>
            <img id="logo" src="/src/assets/Pokemon-LOGO.png"></img>
        </div>
    )
}

export default Header;