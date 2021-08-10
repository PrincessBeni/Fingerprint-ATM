import React from 'react'
import './TransactionCompleted.css'

function TransactionCompleted() {
    return (
        <div className = 'transaction-completed-container'>
            <h1>Thank you for using our ATM</h1>
            <img src='image_processing.gif'
                            onClick = {() => window.location = '/Fingerprintmatched'} 
                            width = "800"
                            height = "500"
                            alt='men shaing hands' 
                            className='shaking-hands-pic'/>
            
        </div>
    )
}

export default TransactionCompleted
