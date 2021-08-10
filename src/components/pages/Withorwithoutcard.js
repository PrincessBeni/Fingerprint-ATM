import React , {useState} from 'react'
import './withOrWithoutCardOption.css'
import {Button} from '../Button';
import { Link } from 'react-router-dom';    

    function Withorwithoutcard() {
            const [button] = useState(true);
        
            return (
                <div className='with-or-without-card'>
                    <p>How do you want to transact?</p><br/>
                    <div className='card-btns-1'>
                        {button && <Button onClick={() =>  window.location='/Fingerprintrequest'} 
                            className='Cardbtn-1'
                            buttonStyle='primary--btn'
                            buttonSize='large--btn'>
                            Without Card
                            </Button>
                        }
        
                        {button && <Button 
                            onClick = {() => window.location.href = '/InsertCard'}
                            className='Cardbtn-2' 
                            buttonStyle='primary--btn' 
                            buttonSize='large--btn'> 
                            With Card
                            </Button>
                        }
                    </div>

                    <div className = 'help-and-button'><br/><br/>
                        <Link to = '/Fingerprintrequest' 
                            className = 'help-link'> 
                            How to use this ATM? 
                        </Link>
        
                        <div className = 'card-btns-2'>
                            {button && <Button 
                                onClick = {() => window.location.href = '/WelcomePage'}
                                className='Cardbtn' 
                                buttonStyle='secondary--btn' 
                                buttonSize='small--btn'> MyExchange
                            </Button>
                            }
                        </div>
                </div>
                </div>
    )
}

export default Withorwithoutcard
