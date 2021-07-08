import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="social-media">
                <div className="social-media-container">
                    <h3 id="home"></h3>
                    <a href="https://github.com/chasebrownn" target="_blank">
                        <img src={require('./content/images/twitch-logo.png').default} className='logo' />
                    </a>
                    <a href="https://t.me/nobilitycoin" target="_blank">
                        <img src={require('./content/images/telegram-logo.png').default} className='logo' />
                    </a>
                    <a href="https://github.com/chasebrownn" target="_blank">
                        <img src={require('./content/images/github-logo.png').default} className='logo' />
                    </a>
                    <a href="https://twitter.com/Nobilitycoin" target="_blank">
                        <img src={require('./content/images/twitter-logo.png').default} className='logo' />
                    </a>
                    <a href="https://www.reddit.com/u/nobilitycoin/?utm_source=share&utm_medium=ios_app&utm_name=iossmf" target="_blank">
                        <img src={require('./content/images/reddit-logo.png').default} className='logo' />
                    </a>
                    <a href="https://www.instagram.com/nobilitycoin/" target="_blank">
                        <img src={require('./content/images/instagram-logo.png').default} className='logo' />
                    </a>
                </div>
            </nav>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        NOBILITY
                        {/* <i className="fab fa-typo3" onClick={closeMobileMenu}></i> */}
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a className= 'nav-links' href="/#home">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className= 'nav-links' href="/#team">Team</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-links' href="/#roadmap">RoadMap</a>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu} >
                                Buy
                            </Link>
                        </li>
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
                </div>
            </nav>
        </>
    )
}

export default Navbar