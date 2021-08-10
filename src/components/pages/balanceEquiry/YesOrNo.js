import React from 'react'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'
import './YesOrNo.css'

function YesOrNo() {
    return (
        <div className = 'yes-or-no-container'>
            <p>Do you want to perform another transaction</p>
            <div className='yes-or-no-btns'>
                        {button && <Button onClick={() =>  window.location='/SelectTransaction'} 
                            className='yes-or-no-btn-1'
                            buttonStyle='primary--btn'
                            buttonSize='large--btn'>
                            YES
                            </Button>
                        }
        
                        {button && <Button 
                            onClick = {() => window.location.href = '/TransactionCompleted'}
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

export default YesOrNo
