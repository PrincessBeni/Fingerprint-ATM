import React from 'react'
import {Button} from '../Button';
import './EnterPin.css'
import button from './Withorwithoutcard'

function EnterPin() {
    return (
        <div className = 'enter-amount-container'>
            <div className = 'enter-pin-pic-and-text'>
           <div className = 'enter-pin-text'>
                <h1>Please enter your pin</h1>
                
            </div>
            <img src='cancel button.png'
                    onClick = {() => window.location = '/Withorwithoutcard'}  
                    alt='Cancel selection. Go back to previous page'
                    className='enter-pin-cancel-pic'
                />
            </div>

            <div className = 'enter-pin-input-field'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-input-field'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow'>
                    [Input Field]
                </Button>}
            </div>
            
            <div className = 'enter-pin-btns-group-1'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn1'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    1
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn2'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    2
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn3'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    3
                </Button>}
            </div>

            <div className = 'enter-pin-btns-group-2'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn4'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    4
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn5'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    5
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn6'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    6
                </Button>}
            </div>

            <div className = 'enter-pin-btns-group-3'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn7'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    7
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn8'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    8
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-pin-btn9'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    9
                </Button>}
            </div>

            <div className = 'enter-pin-btns-group-4'>
            {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn0'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    0
                </Button>}
            </div>

            <div className = 'pin-proceed-confirmation-btn'>
                {button && <Button onClick = {() => window.location.href = '/WithCardSelectTransaction'}
                    className='proceed-confirmation-list-1'
                    buttonStyle='primary--btn'
                    buttonSize='stylished-small-btn'>
                    Proceed
                </Button>}
            </div>
        </div>
    )
}

export default EnterPin
