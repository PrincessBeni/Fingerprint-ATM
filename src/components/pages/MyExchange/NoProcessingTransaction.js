import React from 'react'
import './ProcessingTransaction.css'


function NoProcessingTransaction() {

    {/*redirect to the TrannsactionSuccessful page after 1 second*/}
 setTimeout(
    function() {
        window.location.replace('/NoTransactionSuccessful');
    }, 4000
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

export default NoProcessingTransaction

