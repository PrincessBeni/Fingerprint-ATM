import React from 'react'
import {Button} from '../Button';
import button from './Withorwithoutcard'

function WithcardSelectAmount() {
    return (
        <div className='select-amount-container'>
            <div className = 'cancel-and-text'>
                <h3 className = 'amount-text'>Please select amount</h3>
                <img src='cancel button.png'
                    onClick = {() => window.location = '/SelectTransaction'}  
                    alt='Cancel selection. Go back to previous page'
                    className='cancel-pic'
                />
            </div>

            <p className = 'p1'> You can also enter your prefered amount</p>
            <p className = 'p2'> All amount are in GH</p>  
            {/*<div>{amount}</div>*/}
            {/*column 1*/}
            <div className = 'select-amount-btns-1'>
                <div className = 'amount-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/ApproveTransactionChoice'}
                        className='amount-btns-list-1'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'   
                        >
                        50
                    </Button>}
                </div>
                <div className = 'amount-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/ApproveTransactionChoice'}
                        className='amount-btns-list-2'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'>
                        100
                    </Button>}
                </div>
            </div>
            {/*column 2*/}
            <div className = 'select-amount-btns-2'>
                <div className = 'amount-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/ProceedConfirmation'}
                        className='amount-btns-list-1'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'>
                        200
                    </Button>}
                </div>
                <div className = 'amount-btns-list-2'>
                    {button &&<Button onClick = {() => window.location.href = '/ProceedConfirmation'}
                        className='amount-btns-list-3'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'>
                        300
                    </Button>}
                </div>
            </div>
            {/*column 3*/}
            <div className = 'select-amount-btns-3'>
                <div className = 'amount-btns-list-1'>
                    {button &&<Button onClick = {() => window.location.href = '/ProceedConfirmation'}
                        className='amount-btns-list-1'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'>
                        400
                    </Button>}
                </div>
                <div className = 'amount-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/ProceedConfirmation'}
                        className='amount-btns-list-2'
                        buttonStyle='secondary--btn'
                        buttonSize='stylished-medium-btn'>
                        500
                    </Button>}
                </div>
            </div>

            {/*column 4*/}
            <div className = 'select-amount-btns-4'>
                {button &&<Button onClick = {() => window.location.href = '/EnterAmount'}
                    className='amount-btns-list-1'
                    buttonStyle='primary--btn'
                    buttonSize='large--btn'>
                    Enter Amount
                </Button>}
                </div> 
        </div>
    )
}

export default WithcardSelectAmount
