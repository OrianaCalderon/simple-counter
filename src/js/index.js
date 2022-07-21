//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";


let count = 0;


setInterval( ()=> {
    let num1 = Math.floor((count/1)%10);
    let num2 = Math.floor((count/10)%10);
    let num3 = Math.floor((count/100)%10);
    let num4 = Math.floor((count/1000)%10);
    count++
    ReactDOM.render(<Home num1={num1} num2={num2} num3={num3} num4={num4} />, document.querySelector("#app"));
}, 1000)