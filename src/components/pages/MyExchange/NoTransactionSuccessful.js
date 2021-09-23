import React from 'react'
import './TransactionSuccessful.css'

function NoTransactionSuccessful() {

    
    {/*redirect to the TransactionCompleted page after 1 second*/}
 setTimeout(
    function() {
        window.location.replace('/TransactionCompleted');
    }, 3000
);

    return (
            <div className = 'transaction-successful-container'>
            <h3>Transaction successful.</h3>
            <h3 className = 'blink_me'>Please take your money!</h3>
        </div>
    )
}

export default NoTransactionSuccessful