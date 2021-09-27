import React from 'react'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'
import './ConfirmTransfer.css'

function ConfirmTransfer() {
    return (
        <div className = 'confirm-transfer-container'>
            <h2 className = 'transfer-confirmation'>You are about to transfer [Place Holder]</h2>
            <h2 className = 'acc-no'>to [Place Holder of Acc No.]</h2>
            <h2 className = 'acc-name'>with the name [Account Holder</h2>

            <h3>Note: This transfer will be charged GHS [Amount]</h3>

            <div className = 'confirm-transfer-container-btn'>
                {button && <Button onClick = {() => window.location = '/YesOrNo'}
                    className='transaction-btns-list-1'
                    buttonStyle='secondary--btn'
                    buttonSize='stylished-small-btn'>
                    OK
                </Button>}
            </div>
        </div>
    )
}

export default ConfirmTransfer
