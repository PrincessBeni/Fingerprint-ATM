import React from 'react';
import {Button} from '../Button';
import button from './Withorwithoutcard';
import './ProceedConfirmation.css';
import buttonValue from './SelectAmount'
import choice2 from './SelectAmount'
import './SelectAmount';

function ProceedConfirmation() {


    return (
        <div className = 'proceed-confirmation-container'>
<div className = 'cancel-and-text'>
                
                <img src='cancel button.png'
                    onClick = {() => window.location.href = '/SelectAmount'}  
                    alt='Cancel selection. Go back to previous page'
                    className='proceed-confirmation-cancel-pic'
                />
            </div>
            <br/><br/><br/> <p>You have requested to withdraw an amount of</p>
            <div>[ {buttonValue} ]</div>

            {/*<div>{amount}</div>*/}

            
            <div className = 'proceed-confirmation-btn'>
                {button && <Button onClick = {() => window.location.href = '/RequestProcessing'}
                    className='proceed-confirmation-list-1'
                    buttonStyle='primary--btn'
                    buttonSize='stylished-small-btn'>
                    Proceed
                </Button>}
            </div>

            <div className = 'proceed-tips'>
                <h4>Tips</h4>
                <ul className = 'proceed-tips-lists'>
                    <li>Please make sure your card is not damagedt</li>
                    <li>Please make sure you take out your card when you are done with your transaction</li>
                </ul>
            </div>
            </div>
    )
}

export default ProceedConfirmation
