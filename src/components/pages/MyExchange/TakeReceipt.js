import React from 'react'


function TakeReceipt() {
    {/*redirect to the TransactionCompleted page after 3 seconds*/}
setTimeout(
    function() {
        window.location.replace('/TransactionCompleted');
    }, 3000
);

    return (
            <div className = 'transaction-successful-container'>
            <h3 className = 'blink_me'>Please take your receipt!</h3>
        </div>
    )
}

export default TakeReceipt
