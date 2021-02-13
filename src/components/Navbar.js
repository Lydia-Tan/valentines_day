import React, {useEffect, useState} from 'react';
import {Button} from './Button';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar(){
    const [click, setClick] = useState(false);
    const [button, setButton ] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(() =>{
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className=  "navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                        no this is patrick
                    </Link>
                    <div className = 'menu-icon' onClick={handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                            <Link to="/" className = "nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to="/egoboost" className = "nav-links" onClick={closeMobileMenu}>
                                Ego Booster
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to="/lovely" className = "nav-links" onClick={closeMobileMenu}>
                                Lovely Things
                            </Link>
                        </li>
                        <li className= 'nav-item'>
                            <Link to="/surprise" className = "nav-links" onClick={closeMobileMenu}>
                                Surprise!
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle ="btn--outline">Compliments</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar