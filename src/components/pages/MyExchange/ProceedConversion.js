import React from 'react'
import './ProceedConversion.css'
import {Button} from "../../Button"
import button from "../Withorwithoutcard"

function ProceedConversion() {
    return (
        <div className = "proceed-conversion-container">
         <div className = 'proceed-conversion-cancel-pic-and-text'>
            <img src='cancel button.png'
                    onClick = {() => window.location = '/InsertMoney'}
                    alt='Cancel selection. Go back to previous page'
                    className='proceed-conversion-money-cancel-pic'
                />
            <h1>Please proceed if the amount you inserted matches</h1>
            </div>
           <div className = "note-and-equivalence">
                <p className = "proceed-conversion-note">Note:</p>
                <p className = "proceed-conversion-equivalence">$1 = Ghs 5.98</p>
            </div>

            <div className = "proceed-conversion-column-1">
                <p className = "proceed-conversion-text"> You have inserted:</p>
                <div className = "proceed-conversion-btn-1">
                {button && <Button
                    className = 'proceed-conversion-btn-1'
                    buttonStyle ='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow-2'>
                    Place Holder (the currency inserted)
                </Button>}
                </div>
            </div>

            <div className = "proceed-conversion-column-2">
                <p className = "proceed-conversion-text">You would recieve:</p>
                <div className = "proceed-conversion-btn-1">
                {button && <Button
                    className='proceed-conversion-btn-1'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow-2'>
                    Place Holder (in GHS)
                </Button>}
                </div>
            </div>

            <div className = 'proceed-conversion-proceed-btn'>
                {button && <Button onClick = {() => window.location.href = '/ReceiptRequest'}
                    className='proceed-conversion-proceed-btn'
                    buttonStyle='primary--btn'
                    buttonSize='stylished-small-btn'>
                    Proceed
                </Button>}
            </div>
            
        </div>
    )
}

export default ProceedConversion
