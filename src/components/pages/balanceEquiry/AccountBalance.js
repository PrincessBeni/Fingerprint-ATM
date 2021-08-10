import React from 'react'
import './AccountBalance.css'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'

function AccountBalance() {
    return (
        <div className = 'account-balance-container'>
            <h1>Account Balance</h1>
            <h2>You have [ ] in your Account </h2>

            <div className = 'account-balance-btn'>
                {button && <Button onClick = {() => window.location.href = '/YesOrNo'}
                    className='transaction-btns-list-1'
                    buttonStyle='secondary--btn'
                    buttonSize='stylished-small-btn'>
                    OK
                </Button>}
            </div>
            
        </div>
    )
}

export default AccountBalance
