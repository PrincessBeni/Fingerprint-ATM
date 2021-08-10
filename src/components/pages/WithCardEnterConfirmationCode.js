import React from 'react'
import {Button} from '../Button'
import button from './Withorwithoutcard'
import './WithCardEnterConfirmationCode.css'

function WithCardEnterConfirmationCode() {
    return (
        <div className = 'with-card-enter-amount-container'>
        <div className = 'with-card-enter-pin-pic-and-text'>
       <div className = 'with-card-enter-pin-text'>
            <h2>Please enter the confirmation code sent to you via SMS</h2>
            
        </div>
        <img src='cancel button.png'
                onClick = {() => window.location = '/Withorwithoutcard'}  
                alt='Cancel selection. Go back to previous page'
                className='with-card-enter-pin-cancel-pic'
            />
        </div>

        <div className = 'with-card-enter-pin-input-field'>
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-input-field'
                buttonStyle='secondary-btn-with-black-border'
                buttonSize='small-btn-with-shadow'>
                [Input Field]
            </Button>}
        </div>
        
        <div className = 'with-card-enter-pin-btns-group-1'>
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-amount-btn1'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                1
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn2'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                2
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn3'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                3
            </Button>}
        </div>

        <div className = 'with-card-enter-pin-btns-group-2'>
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-amount-btn4'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                4
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn5'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                5
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn6'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                6
            </Button>}
        </div>

        <div className = 'with-card-enter-pin-btns-group-3'>
            {button && <Button onClick = {() => window.location.href = '/'}
                className='enter-amount-btn7'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                7
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn8'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                8
            </Button>}
            {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-pin-btn9'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                9
            </Button>}
        </div>

        <div className = 'with-card-enter-pin-btns-group-4'>
        {button && <Button onClick = {() => window.location.href = '/'}
                className='with-card-enter-amount-btn0'
                buttonStyle='primary--btn'
                buttonSize='small-round-btn'>
                0
            </Button>}
        </div>

        <div className = 'with-card-pin-proceed-confirmation-btn'>
            {button && <Button onClick = {() => window.location.href = '/CodeConfirmed'}
                className='with-card-proceed-confirmation-list-1'
                buttonStyle='primary--btn'
                buttonSize='stylished-small-btn'>
                Proceed
            </Button>}
        </div>
        </div>
    )
}

export default WithCardEnterConfirmationCode
