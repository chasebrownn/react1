import React, { useState, useEffect, Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

class Navbar extends Component {

    componentDidMount() {
        let toggle = document.getElementById("toggleMenu");
        let menu = document.getElementById("navmenu");
        let closeBtn = document.getElementById("closebtn");

        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.toggle("open");
        });

        closeBtn.addEventListener("click", function (event) {
            event.preventDefault();
            menu.classList.remove("open");
        });
    }

    render() {
        return (
            <>
                <nav className="social-media">
                    <div className="container">
                        <h3 id="home" className="m-0"></h3>

                        <a href="https://t.me/nobilitytoken" target="_blank">
                            <img src={require('./content/images/telegram-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://github.com/chasebrownn" target="_blank">
                            <img src={require('./content/images/github-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://twitter.com/nobilitytoken?s=21" target="_blank">
                            <img src={require('./content/images/twitter-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://www.reddit.com/u/nobilitytoken" target="_blank">
                            <img src={require('./content/images/reddit-logo.png').default} className='social-icons' />
                        </a>
                        <a href="https://www.instagram.com/nobilitytoken/" target="_blank">
                            <img src={require('./content/images/instagram-logo.png').default} className='social-icons' />
                        </a>
                    </div>
                </nav>


                <div className="custom-nav text-center sticky-top">
                    <div className="container">
                        <div className="d-flex align-items-center custom-navbar flex-column flex-lg-row justify-content-lg-between" id="navmenu">

                            <a href="/" className="navbrand d-none d-lg-inline-block py-3" rel="nofollow">
                                <img src={require('./content/images/nobility-logo1.png').default} className='logo' />
                            </a>

                            <a href="/" className="navbrand d-lg-none text-white mb-5" rel="nofollow" id="closebtn">
                                Close
                            </a>

                            <div className="d-flex flex-column flex-lg-row text-center">
                                <div className="flex-fill">
                                    <a href="/#" className="custom-link px-4">
                                        Home
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#roadmap" className="custom-link px-4">
                                        Roadmap
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="/#team" className="custom-link px-4">
                                        Team
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="https://docs.nobilitytoken.com/nobility-litepaper/" className="custom-link px-4">
                                        Litepaper
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA995276A5fb2742B51615bc7DD59F404De82E034" className="custom-link px-4">
                                        Buy Now
                                    </a>
                                </div>

                                <div className="flex-fill">
                                    <Link to="/buy" className="custom-link px-4">
                                        How To Buy
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex d-lg-none justify-content-between align-items-center mobile-menu">
                            <a href="/" className="navbrand text-white">
                                <img src={require('./content/images/nobility-logo1.png').default} className='logo' />
                            </a>
                            <div>
                                <a href="" className="btn btn-link text-white btn-lg px-3 menu-btn" id="toggleMenu">
                                    <i className="fas fa-bars" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar