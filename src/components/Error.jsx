import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css"
function ErrorPage(){

    return(
        <div id="ErrorDiv" className=" flex flex-col text-white items-center w-full h-full bg-gradient-to-r from-red-800 to-cyan-700 p-20 gap-4 text-xl rounded-lg">
            <Link to="/pokemon"><h2>Go back</h2></Link>
            <h1>Error</h1>
            <h2>Pokemon not Found</h2>
            <img width={200} src="/src/assets/error-icon-4.png"></img>
        </div>
    )

}

export default function Error()
{
    return(
        <section>
            <ErrorPage/>
        </section>
    );
}