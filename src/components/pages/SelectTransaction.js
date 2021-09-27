import React, { useState } from 'react'
import './SelectTransaction.css';
import {Button} from '../Button';
import button from './Withorwithoutcard'

function SelectTransaction() {

    {/*const button = useState(true);*/}
    return (
        <div className='select-transaction-container'>
            <h3>Welcome back, dear valued customer</h3>
            <p>Please select transaction</p>

            {/*column 1*/}
            <div className = 'select-transaction-btns-1'>
                <div className = 'transaction-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/SelectAmount'}
                        className='transaction-btns-list-1'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-large-btn'>
                        WITHDRAW
                    </Button>}
                </div>
                <div className = 'transaction-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/Transfer'}
                        className='transaction-btns-list-2'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-large-btn'>
                        TRANSFER
                    </Button>}
                </div>
            </div>
            {/*column 2*/}
            <div className = 'select-transaction-btns-2'>
                <div className = 'transaction-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/AccountBalance'}
                        className='transaction-btns-list-1'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-large-btn'>
                        BALANCE ENQUIRY
                    </Button>}
                </div>
                <div className = 'transaction-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/Proceedpage'}
                        className='transaction-btns-list-2'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-large-btn'>
                        MINI STATEMENT
                    </Button>}
                </div>
            </div>

            {/*column 3*/}
            <div className = 'select-transaction-btns-3'>
                {button && <Button onClick = {() => window.location.href = '/Withorwithoutcard'}
                    className='transaction-btns-list-1'
                    buttonStyle='secondary--btn'
                    buttonSize='medium--btn'>
                    CANCEL
                </Button>}
            </div>
            
        </div>
    )
}

export default SelectTransaction
