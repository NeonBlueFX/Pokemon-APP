import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css"
function ErrorPage(){

    return(
        <div id="ErrorDiv">
            <Link to="/pokemon"><h2>Go back</h2></Link>
            <h1>Error</h1>
            <h2>Pokemon not Found</h2>
            <img width={200} src="/src/error-icon-4.png"></img>
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