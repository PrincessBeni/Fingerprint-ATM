import React from 'react'

function WithCardFingerprintRequest() {
    return (
        <div className='finger-print-request'>
                    <h3>Place your finger on the fingerprint device</h3>
                    <div className = 'hero-images'>
                            <img src='Ellipse 4.png'
                            onClick = {() => window.location = '/WithCardLoading'}  
                            alt='finger print request' 
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

export default WithCardFingerprintRequest
