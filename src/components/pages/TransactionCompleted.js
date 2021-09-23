import React from 'react'
import './TransactionCompleted.css'

function TransactionCompleted() {
 
    {/*redirect to the TransactionCompleted page after 1 second*/}
    setTimeout(
        function() {
            window.location.replace('/');
        }, 2000
    );

    return (
        <div className = 'transaction-completed-container'>
            <h1>Thank you for using our ATM</h1>
            <img src='image_processing.gif'
                            width = "800"
                            height = "500"
                            alt='men shaking hands' 
                            className='shaking-hands-pic'/>
                            
        </div>
    )
}

export default TransactionCompleted
