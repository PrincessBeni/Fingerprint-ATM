import React from 'react'
import './InsertCard.css'


function InsertCard() {
    setTimeout(
        function() {
            window.location.replace('/EnterPin');
        }, 4000
    );

    return (
        <div className = 'insert-card-container'>
            <h1>Please insert your ATM card into the ATM machine</h1>
            
            <img src='Insert.gif'
                onClick = {() => window.location = '/Fingerprintmatched'} 
                alt='girl.jpg' 
                className='insert-pic'/>
              
            <div className = 'insert-tips'>
                <h4>Tips</h4>
                <ul className = 'insert-tips-lists'>
                    <li>Please make sure your card is not damaged</li>
                    <li>Please make sure you take out your card when you are done with your transaction</li>
                </ul>
            </div>
        </div>
    )
}

export default InsertCard
