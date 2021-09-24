import React from 'react'
import './ProcessingTransaction.css'

function ProcessingTransaction() {

    {/*redirect to the TrannsactionSuccessful page after 3 second*/}
 setTimeout(
    function() {
        window.location.replace('/TransactionSuccessful');
    }, 2000
);

    return (
        <div className = 'processing-request-container'>
            <h3>Please wait. Your request is being processed</h3>
            <div className = 'hero-images'>
                            <img src='Processing.gif'
                            alt='Processing Transaction' 
                            width="200" 
                            height="200" 
                            className='processing-pic'/>
                    </div>
        </div>
    )
}

export default ProcessingTransaction
