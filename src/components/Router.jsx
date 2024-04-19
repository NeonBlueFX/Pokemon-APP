import {BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "../pages/Pokemons";
import PokemonInfoPage from "./PokemonInfoPage";
import Header from "./Header";
import Home from "../pages/HomePage";
import Error from "./Error";


function AppRouter()
{
    return(
        <BrowserRouter>
        <header id="header">
            <Header />
        </header>





        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pokemon" element={<Pokemons />}></Route>
            <Route path="/pokemon/error" element={<Error />}></Route>
            <Route path="/pokemon/:poke" element={<PokemonInfoPage />}></Route>
        </Routes>
    </BrowserRouter>
    )
}

export default AppRouter;