import React from 'react'
import './ProceedPage.css'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'

function Proceedpage() {
    return (
        <div className = 'proceed-page-container'>
            <h1 className = 'proceed-page-btn-text-1'>The Mini Statement will provide your transactions</h1>
            <h1 className = 'proceed-page-btn-text-2'>for the last 30 days</h1>

            <div className = 'proceed-page-btn'>
                {button && <Button onClick = {() => window.location.href = '/AccountSummary'}
                    className='transaction-btns-list-1'
                    buttonStyle='secondary--btn'
                    buttonSize='stylished-small-btn'>
                    Proceed
                </Button>}
            </div>
        </div>
    )
}

export default Proceedpage
