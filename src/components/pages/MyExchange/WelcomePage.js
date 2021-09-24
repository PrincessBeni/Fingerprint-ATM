import React from 'react'
import './Welcomepage.css'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'

function WelcomePage() {
    return (
        <div className = "welcome-page-container">
            <h1>Welcome To Your Currency Exchange</h1>
            <p>Please select your currency of exchange</p>
             {/*column 1*/}
             <div className = 'welcome-page-btns-1'>
                <div className = 'welcome-page-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/InsertMoney'}
                        className='welcome-page-btns-list-1'
                        buttonStyle='secondary-btn-with-black-border'
                        buttonSize='large--btn'>
                        $
                    </Button>}
                </div>
                <div className = 'welcome-page-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/InsertMoney'}
                        className='welcome-page-btns-list-2'
                        buttonStyle='secondary-btn-with-black-border'
                        buttonSize='large--btn'>
                        £
                    </Button>}
                </div>
            </div>
            {/*column 2*/}
            <div className = 'welcome-page-btns-2'>
                <div className = 'welcome-page-btns-list-1'>
                    {button && <Button onClick = {() => window.location.href = '/InsertMoney'}
                        className='twelcome-page-btns-list-1'
                        buttonStyle='secondary-btn-with-black-border'
                        buttonSize='large--btn'>
                        €
                    </Button>}
                </div>
                <div className = 'welcome-page-btns-list-2'>
                    {button && <Button onClick = {() => window.location.href = '/InsertMoney'}
                        className='welcome-page-btns-list-2'
                        buttonStyle='secondary-btn-with-black-border'
                        buttonSize='large--btn'>
                        CFA
                    </Button>}
                </div>
            </div>
             {/*column 3*/}
             <div className = 'welcome-page-btns-3'>
                {button && <Button onClick = {() => window.location.href = '/Withorwithoutcard'}
                    className='welcome-page-btns-3'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='medium--btn'>
                    CANCEL
                </Button>}
            </div>
        </div>
    )
}

export default WelcomePage
