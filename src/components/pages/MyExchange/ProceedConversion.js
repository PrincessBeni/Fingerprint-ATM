import React from 'react'
import './ProceedConversion.css'
import {Button} from "../../Button"
import button from "../Withorwithoutcard"

function ProceedConversion() {
    return (
        <div className = "proceed-conversion-container">
            <h1>Please proceed if the amount you inserted matches</h1>
           <div className = "note-and-equivalence">
                <p className = "proceed-conversion-note">Note:</p>
                <p className = "proceed-conversion-equivalence">$1 = Ghs 5.98</p>
            </div>

            <div className = "proceed-conversion-column-1">
                <p className = "proceed-conversion-text"> You have inserted:</p>
                {button && <Button
                    className = 'proceed-conversion-btn-1'
                    buttonStyle ='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow-2'>
                    Place Holder (the currency inserted)
                </Button>}
            </div>

            <div className = "proceed-conversion-column-2">
                <p className = "proceed-conversion-text">You would recieve:</p>
                {button && <Button
                    className='proceed-conversion-btn-1'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow-2'>
                    Place Holder (in GHS)
                </Button>}
            </div>
            
            
        </div>
    )
}

export default ProceedConversion
