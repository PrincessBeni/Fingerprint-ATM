import React from 'react'
import './TransactionSuccessful.css'

function TransactionSuccessful() {

    
    {/*redirect to the select transaction page after 1 second*/}
 setTimeout(
    function() {
        window.location.replace('/TakeReceipt');
    }, 4000
);

    return (
            <div className = 'transaction-successful-container'>
            <h3>Transaction successful.</h3>
            <h3 className = 'blink_me'>Please take your money!</h3>
        </div>
    )
}

export default TransactionSuccessful
