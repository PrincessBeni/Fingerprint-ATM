import React from 'react'

function CodeConfirmed() {

    {/*redirect to the select transaction pae after 1 second*/}
    setTimeout(
        function() {
            window.location.replace('/ProceedConfirmation');
        }, 1000
    );

    return (
        <div className='finger-print-request'>
                    <h3>Confirmation Code Correct</h3>
                    <div className = 'hero-images'>
                        <img src='Finger matched.gif' 
                        alt='finger print matched' 
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

export default CodeConfirmed
