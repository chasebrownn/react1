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
                    <img src={require('./content/images/discord-logo.png').default} className='logo'/>
                    <img src={require('./content/images/github-logo.png').default} className='logo'/>
                    <img src={require('./content/images/twitter-logo.png').default} className='logo'/>
                    <img src={require('./content/images/facebook-logo.png').default} className='logo'/>
                    <img src={require('./content/images/instagram-logo.png').default} className='logo'/>
                </div>
            </nav>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        NOBILITY <i className="fab fa-typo3" onClick={closeMobileMenu}>
                        </i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/team' className='nav-links' onClick={closeMobileMenu} >
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                                Community
                            </Link>
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
