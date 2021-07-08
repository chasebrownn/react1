import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-container'>
                <video src={require('./content/videos/video-2.mp4').default} autoPlay loop muted />
                {/* <img src={require('./content/images/hero-image.png').default} /> */}
                <div className="hero-text">
                    <h4>Welcome to</h4>
                    <h1>NOBILITY</h1>
                    <p>Nobility is a cryptocurrency token that will revolutionize the esports landspace by injecting the industry with high quality offerings, prize pools, and tournaments.</p>
                    <div className="hero-button">
                        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Buy Now</Button>
                        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>TRAILER <i className='far fa-play-circle' /></Button> */}
                    </div>
                        <div className="tokenomics-container">
                        <table>
                            <tr>
                                <td className="token-table"><center><h5>1 QUADRILLION</h5></center></td>
                                <td className="token-table"><center><h5>30%</h5></center></td>
                                <td className="token-table"><center><h5>4 Year</h5></center></td>
                             </tr> 
                             <tr>
                                <td className="token-table"><center><h6>Supply</h6></center></td>
                                <td className="token-table"><center><h6>Burn</h6></center></td>
                                <td className="token-table"><center><h6>Liquidity Lock</h6></center></td>
                             </tr>
                        </table>
                        {/* <div className="supply">
                            <h5>1 QUADRILLION</h5>
                            <h6>SUPPLY</h6>
                        </div>
                        <div className="burn">
                            <h5>30%</h5>
                            <h6>BURN</h6>
                        </div>
                        <div className="liquidity-lock">
                            <h5>4 YEAR</h5>
                            <h6>LIQUIDITY LOCK</h6>
                        </div> */}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Hero

//confidentiality and IP assignment agreement

//master services agreement

//for derrick we give him membership redemption agreement