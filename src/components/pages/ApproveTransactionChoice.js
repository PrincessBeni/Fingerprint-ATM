import React from 'react'
import './ApproveTransactionChoice.css'
import {Button} from '../Button'
import button from './Withorwithoutcard'

function ApproveTransactionChoice() {
    return (
        <div>
            <div className='approve-transaction-choice-container'>
                <div className = 'approve-paragraphs'>
                    <p>Please select how you want to approve</p><br/>
                    <p>your transaction</p>
                    </div><br/><br/><br/><br/><br/>
                    <div className='card-btns-1'>
                        {button && <Button onClick={() =>  window.location='/WithCardFingerprintRequest'} 
                            className='Cardbtn-1'
                            buttonStyle='primary--btn'
                            buttonSize='large--btn'>
                            Fingerprint
                            </Button>
                        }
        
                        {button && <Button 
                            onClick = {() => window.location.href = '/WithCardEnterConfirmationCode'}
                            className='Cardbtn-2' 
                            buttonStyle='primary--btn' 
                            buttonSize='large--btn'> 
                            SMS
                            </Button>
                        }
                    
                </div>
                </div>
        </div>
    )
}

export default ApproveTransactionChoice
