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
                <div className="container">
                    <h3 id="home" className="m-0"></h3>
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

            <nav class="navbar navbar-expand-lg navbar-dark custom-nav w-100 my-0 sticky-top">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        Nobility
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Buy Now</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar