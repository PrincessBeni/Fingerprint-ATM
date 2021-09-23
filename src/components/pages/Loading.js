import React from 'react'
import './fingerprintRequest.css'

function Loading() {

 {/*redirect to the select transaction page after 1 second*/}
 setTimeout(
    function() {
        window.location.replace('/Fingerprintmismatched');
    }, 5000
);

    return (
            <div className='finger-print-request'>
                    <h3>Fingerprint verification loading</h3>
                    <div className = 'hero-images'>
                            <img src='loading.gif'
                            onClick = {() => window.location = '/Fingerprintmatched'} 
                            alt='girl.jpg' 
                            width="200" 
                            height="200" 
                            className='loading-pic'/>
                    </div>
                    <div className = 'tips'>
                        <h4>Tips</h4>
                        <ul className = 'tips-lists'>
                            <li>Please make sure your fingers are not wet</li>
                            <li>Please make sure your fingers are well 
                                positioned on the device
                            </li>
                            <li>If your fingerprint is mismatched, please try again</li>
                        </ul>
                    </div>
        </div>
    )
}

export default Loading
