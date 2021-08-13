import React, { Component } from 'react'
import './EnterAmount.css'
import {Button} from '../Button'
import button from './Withorwithoutcard'


class EnterAmount extends Component {

constructor(props) {
    super(props)

    this.state = {
        message: 'Input Feild' 
    }
}
            option0(){
                this.setState ({
                    message: '0'
                })
            }
            
            option1(){
                this.setState (prevState => ({
                    message: prevState.message + '1'
                }))
            }

            option2(){
                this.setState (prevState => ({
                    message: prevState.message + '2'
                }))
            }

            option3(){
                this.setState (prevState => ({
                    message: prevState.message + '3'
                }))
            }

            option4(){
                this.setState (prevState => ({
                    message: prevState.message + '4'
                }))
            }

            option5(){
                this.setState (prevState => ({
                    message: prevState.message + '5'
                }))
            }

            option6(){
                this.setState (prevState => ({
                    message: prevState.message + '6'
                }))
            }

            option7(){
                this.setState (prevState => ({
                    message: prevState.message + '7'
                }))
            }

            option8(){
                this.setState (prevState => ({
                    message: prevState.message + '8'
                }))
            }

            option9(){
                this.setState (prevState => ({
                    message: prevState.message + '9'
                }))
            }


    render() {
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
                {button && <Button 
                    className='enter-amount-input-field'
                    buttonStyle='secondary-btn-with-black-border'
                    buttonSize='small-btn-with-shadow' value = 'input field'>
                    [{this.state.message}]
                </Button>}
            </div>
            
            <div className = 'enter-amount-btns-group-1'>
                {button && <Button onClick = {() => this.option1()}
                    className='enter-amount-btn1'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    1
                </Button>}
                {button && <Button onClick = {() => this.option2()}
                    className='enter-amount-btn2'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    2
                </Button>}
                {button && <Button onClick = {() => this.option3()}
                    className='enter-amount-btn3'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    3
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-2'>
                {button && <Button onClick = {() => this.option4()}
                    className='enter-amount-btn4'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    4
                </Button>}
                {button && <Button onClick = {() => this.option5()}
                    className='enter-amount-btn5'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    5
                </Button>}
                {button && <Button onClick = {() => this.option6()}
                    className='enter-amount-btn6'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    6
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-3'>
                {button && <Button onClick = {() => this.option7()}
                    className='enter-amount-btn7'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    7
                </Button>}
                {button && <Button onClick = {() => this.option8()}
                    className='enter-amount-btn8'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    8
                </Button>}
                {button && <Button onClick = {() => this.option9()}
                    className='enter-amount-btn9'
                    buttonStyle='primary--btn'
                    buttonSize='small-round-btn'>
                    9
                </Button>}
            </div>

            <div className = 'enter-amount-btns-group-4'>
            {button && <Button onClick = {() => this.option0()}
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
}

export default EnterAmount

