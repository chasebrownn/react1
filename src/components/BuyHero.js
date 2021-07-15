import React from 'react'
import '../App.css';
import { Button } from './Button';
import './BuyHero.css';

function BuyHero() {
    return (
        <div className='hero'>
            <div className='container'>

                <div className="d-flex hero-container align-items-center">
                    <div className="hero-text">

                        <h1>HOW TO BUY</h1>
                        
                        <div className="d-flex">
                            <div className="hero-button buy-hero-button">

                                <a className="btn btn-primary pulse btn-lg px-5" href='#metamask'>
                                    MetaMask {'   '}<img style={{ maxHeight: "1.5em" }} src={require('./content/images/services/metamask.png').default} alt="Pancakeswap" /></a>
                            </div>
                            <div className="hero-button buy-hero-button">
                                <a className="btn btn-primary pulse btn-lg px-5" href='#trustwallet'>
                                    Trust Wallet {'   '}<img style={{ maxHeight: "1.5em" }} src={require('./content/images/services/trustwallet.png').default} alt="Pancakeswap" /></a>
                                </div>
                        </div>

                    </div>
                </div>

                
            </div> 
        </div>
    )
}

export default BuyHero

//confidentiality and IP assignment agreement

//master services agreement

//for derrick we give him membership redemption agreement