import React from 'react'

{/*redirect to the select transaction page after 1 second*/}
setTimeout(
    function() {
        window.location.replace('/TransactionCompleted');
    }, 4000
);

function TakeReceipt() {
    return (
            <div className = 'transaction-successful-container'>
            <h3 className = 'blink_me'>Please take your receipt!</h3>
        </div>
    )
}

export default TakeReceipt
