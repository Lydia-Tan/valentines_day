import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Header.css';
function Header(){
    return(
        <div className = 'header-container'>
            <h1>Hello! Happy V-day, ~name~ (for privacy's sake)</h1>
            <h2>-- oops I mean Valentine's Day ;) hahaha jk </h2>
            <p>I thought to put my beep boop skills to use to make this just for you hehe 💕 so I’m putting together a bit of a digital goodie box for you. No cap, it’s pretty bad because I’m zzzzzz but ILY!!!!!!! I hope you enjoy this little thing
</p>
            <div className = "header-btns">
                <Button className = 'btns' buttonStyle='btn--outline' buttonSize = 'btn--large'>
                    ego booster
                </Button>
                <Button className = 'btns' buttonStyle='btn--primary' buttonSize = 'btn--large'>
                    lovely things
                </Button>
            </div>
        </div>
    )
}
export default Header