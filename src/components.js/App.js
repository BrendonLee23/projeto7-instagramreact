import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Body from "./Body";


function App() {
    return (
        <div>
            <NavBar/>
            <Body/>
        </div>
    )
}



const elementoRoot = document.querySelector(".root")

ReactDOM.render(App(), elementoRoot);