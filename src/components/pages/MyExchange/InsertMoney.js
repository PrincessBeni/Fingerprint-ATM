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

            <div className = 'insert-money-cancel-pic-and-text'>
            <img src='cancel button.png'
                    onClick = {() => window.location = '/WelcomePage'}
                    alt='Cancel selection. Go back to previous page'
                    className='insert-money-cancel-pic'
                />
            <h1>Welcome to your currency exchange</h1>
            <p>Kindly insert the money you wish to exchange into the ATM machine</p>
            </div>

            <img src = "insertingMoney.jpg"
            onClick = {() => window.location.href = '/ProceedConversion'}
            alt = "Insert cash into ATM machine"
            width = "800px"
            height = "400px"
            className = "inserting-money-pic"
            />
        </div>
    )
}

export default InsertMoney
