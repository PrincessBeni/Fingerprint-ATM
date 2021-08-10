import React, { useState } from 'react'
import './EnterAmount.css'
import {Button} from '../Button'
import button from './Withorwithoutcard'

export default function EnterAmount() {

    // const [show, setShow] = useState (true)
    // var choice = document.getElementsByClassName('.enter-amount-input-field')
    // var input = document.getElementsByClassName('.enter-amount-btns-group-1')
    //  if (choice === '.enter-amount-btn1'){
    //     const newLi = document.createElement('LI')
    //     const liContenet = document.createElement(input.value);
    //     newLi.appendChild(liContenet);
    //     choice.appendChild(newLi);
    //  }

//    const handleWithdrawClick = (e) =>{
//         let amount = parseInt(this.value)
//     }

    function myFunction() {
        document.getElementById('input').innerHTML = "1";
    }
   
    return (
        <div className = 'enter-amount-container' id = 'input'>
            <div className = 'enter-amount-pic-and-text'>
           <div className = 'enter-amount-text'>
                <h1>Please enter your preferred amount</h1>
                <p> All amount are in GH</p><br/>
            </div>
            <img src='cancel button.png'
                    onClick = {() => window.location = '/SelectAmount'}  
                    alt='Cancel selection. Go back to previous page'
                    className='enter-amount-cancel-pic'
                />
            </div>

            <div className = 'enter-amount-input-field'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-input-field'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow' value = 'input field'>
                    [Input Field]
                </Button>}
            </div>
            
            <div className = 'enter-amount-btns-group-1'>
                {button && <Button onClick = {() => myFunction()}
                    className='enter-amount-btn1'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    1
                </Button>}
                {button && <Button onClick = {() => document.getElementById('input').innerHTML = "2"}
                    className='enter-amount-btn2'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    2
                </Button>}
                {button && <Button onClick = {() => document.write(3)}
                    className='enter-amount-btn3'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    3
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-2'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn4'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    4
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn5'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    5
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn6'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    6
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-3'>
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn7'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    7
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn8'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    8
                </Button>}
                {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn9'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    9
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-4'>
            {button && <Button onClick = {() => window.location.href = '/'}
                    className='enter-amount-btn0'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    0
                </Button>}
            </div>

            <div className = 'enter-proceed-confirmation-btn'>
                {button && <Button onClick = {() => window.location.href = '/ProceedConfirmation'}
                    className='proceed-confirmation-list-1'
                    buttonStyle='primary--btn'
                    buttonSize='stylished-small-btn'>
                    Proceed
                </Button>}
            </div>
        </div>
    )
}

