import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from '../Button'
import button from './Withorwithoutcard'

function Display(props) {
    let description;
    let a =50;
    let b = 100;
    if (a == b) {
      description = <i>equal</i>;;
    } 
    else {
      description = <i>not equal</i>;
    }

    function myFunction() {
        
        document.getElementById("a").innerHTML = "Hello World" 
    }
    
    return (
        <div>
            <h1>Hello</h1>

            {a} is an {description} number


            <button onClick = {() =>Display()}>Click me</button>

            <p id="a"></p>


        </div>
    )
}

export default Display
