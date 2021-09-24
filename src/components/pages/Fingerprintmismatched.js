import React from 'react';
import './fingerprintRequest.css';
import {Link} from 'react-router-dom';

function Fingerprintmismatched() {
    return (
            <div className='finger-print-request'>
                    <h3>Fingerprint Mismatched!<Link to = '/FingerprintRequest' className = 'try-again'> Please try again!</Link></h3>
                    <div className = 'hero-images'>
                        <img src='cancel button.png' 
                        alt='finger print mismatched' 
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

export default Fingerprintmismatched
