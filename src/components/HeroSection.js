import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
            <div className = 'hero-items'>
                <div className = 'hero-images'>
                    <img  src='girl1.jpg' alt='girl1.jpg' width="450" height="300" className='girl-1'/>
                    <img  src='man.jpg' alt='man.jpg' width="450" height="300" className='man'/>
                    <img  src='girl2.jpg' alt='girl1.jpg' width="530" height="300" className = 'girl-2'/>
                </div>
                <div className='hero-btns'>
                    <Link to = '/Withorwithoutcard'>
                        <Button className='btns' 
                            buttonStyle='primary--btn' 
                            buttonSize='medium--btn'> TOUCH ME
                        </Button>
                    </Link> 
               </div>
           </div>
        </div>
    )
}

export default HeroSection
