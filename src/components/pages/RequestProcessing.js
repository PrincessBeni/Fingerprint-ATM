import React from 'react'
import './RequestProcessing.css'

function RequestProcessing() {

     {/*redirect to the select transaction pae after 1 second*/}
 setTimeout(
    function() {
        window.location.replace('/TransactionCompleted');
    }, 5000
);

    return (
        <div className = 'request-processing-container'>
            <h1>Processing cash withdrawal. Kindly wait patiently.</h1>
            <div className = 'request-processing-image'>
                            <img src='loading.gif'
                            onClick = {() => window.location = '/Fingerprintmatched'} 
                            alt='girl.jpg' 
                            width="200" 
                            height="200" 
                            className='request-processing-pic'/>
                    </div>

             <div className = 'proceed-tips'>
                <h4>Tips</h4>
                <ul className = 'proceed-tips-lists'>
                    <li>Please make sure your card is not damaged</li>
                    <li>Please make sure you take out your card when you are done with your transaction</li>
                </ul>
            </div>
        </div>
    )
}

export default RequestProcessing
