import React from 'react'
import './InsertMoney.css'

function InsertMoney() {
        {/*redirect to the select transaction pae after 1 second*/}
        // setTimeout(
        //     function() {
        //         window.location.replace('/ProceedConversion');
        //     }, 1000
        // );
    return (
        <div className = "insert-money-container">
            <h1>Welcome to your currency exchange</h1>
            <p>Kindly insert the money you wish to exchange into the ATM machine</p>
            <img src = "insertingMoney.jpg"
            onClick = {() => window.location = '/ProceedConversion'}
            alt = "Insert cash into ATM machine"
            width = "800px"
            height = "400px"
            className = "inserting-money-pic"
            />
        </div>
    )
}

export default InsertMoney
