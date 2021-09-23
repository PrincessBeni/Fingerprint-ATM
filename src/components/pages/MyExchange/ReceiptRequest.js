import React from 'react'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'
import '../balanceEquiry/YesOrNo.css'

function ReceiptRequest() {
    return (

        <div className = 'yes-or-no-container'>
            <p>Do you want a receipt for this transaction?</p>
            <div className='yes-or-no-btns'>
                        {button && <Button onClick={() =>  window.location='/ProcessingTransaction'} 
                            className='yes-or-no-btn-1'
                            buttonStyle='primary--btn'
                            buttonSize='large--btn'>
                            YES
                            </Button>
                        }
        
                        {button && <Button 
                            onClick = {() =>  window.location='/NoProcessingTransaction'}
                            className='yes-or-no-btn-2' 
                            buttonStyle='primary--btn' 
                            buttonSize='large--btn'> 
                            NO
                            </Button>
                        }
                    </div>
            
        </div>
        
    )
                    }


export default ReceiptRequest
