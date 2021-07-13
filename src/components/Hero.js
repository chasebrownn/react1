import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';




{/*


                         /\
                         ||
                         ||
                         ||
                         ||           {}
                         ||          .--.
                         ||         /.--.\
                         ||         |====|
                         ||         |`::`|
                        _||_    .-;`\..../`;_.-^-._
                         /\\   /  |...::..|`   :   `|
                         |:'\ |   /'''::''|   .:.   |
                          \ /\;-,/\   ::  |..:::::..|
                           \ <` >  >._::_.| ':::::' |
                            `""`  /   ^^  |   ':'   |
                                  |       \    :    /
                                  |        \   :   /
                                  |___/\___|`-.:.-`
                                   \_ || _/    `
                                   <_ >< _>
                                   |  ||  |
                                   |  ||  |
                                  _\.:||:./_
                                 /____/\____\


             /$$   /$$           /$$       /$$ /$$ /$$   /$$
            | $$$ | $$          | $$      |__/| $$|__/  | $$
            | $$$$| $$  /$$$$$$ | $$$$$$$  /$$| $$ /$$ /$$$$$$   /$$   /$$
            | $$ $$ $$ /$$__  $$| $$__  $$| $$| $$| $$|_  $$_/  | $$  | $$
            | $$  $$$$| $$  \ $$| $$  \ $$| $$| $$| $$  | $$    | $$  | $$
            | $$\  $$$| $$  | $$| $$  | $$| $$| $$| $$  | $$ /$$| $$  | $$
            | $$ \  $$|  $$$$$$/| $$$$$$$/| $$| $$| $$  |  $$$$/|  $$$$$$$
            |__/  \__/ \______/ |_______/ |__/|__/|__/   \___/   \____  $$
                                                                 /$$  | $$
                                                                |  $$$$$$/
                                                                 \______/

 */}

function Hero() {
    return (
        <div className='hero'>
            <div className='container'>

                <div className="d-flex hero-container align-items-center">
                    <div className="hero-text">

                        <h4 className="mb-0">Welcome to</h4>
                        <h1>NOBILITY</h1>
                        <p>Nobility is a cryptocurrency token that will revolutionize the esports landspace by injecting the industry with high quality offerings, prize pools, and tournaments.</p>
                        
                        <div className="d-flex">
                            <div className="hero-button">

                                <div className="btn btn-primary pulse btn-lg px-5"
                                    onClick={() => {
                                        window.open("https://exchange.pancakeswap.finance/#/swap", "_blank")
                                    }}
                                >Buy Now {'   '}<img style={{ maxHeight: "1.5em" }} src={require('./content/images/services/pancakeswap.png').default} alt="Pancakeswap" /></div>
                            </div>
                        </div>

                        <div class="d-flex mt-5 text-center">
                            <div>
                                <h5 className="mb-0">1 Quadrillion</h5>
                                <h6 className="mb-0">Supply</h6>
                            </div>
                            <div className="px-5">
                                <h5 className="mb-0">24.55%</h5>
                                <h6 className="mb-0">Burn Rate</h6>
                            </div>
                            <div>
                                <h5 className="mb-0">1 Year</h5>
                                <h6 className="mb-0">Liquidity Lock</h6>
                            </div>
                        </div>
                        {/* <div class="d-flex mt-5 text-center">
                            <div>
                                <h5 className="mb-0">4%</h5>
                                <h6 className="mb-0">Liquidity Pool</h6>
                            </div>
                            <div className="px-5">
                                <h5 className="mb-0">4%</h5>
                                <h6 className="mb-0">Redistribution</h6>
                            </div>
                            <div>
                                <h5 className="mb-0">1%</h5>
                                <h6 className="mb-0">Prize Pool</h6>
                            </div>
                            <div className="px-5">
                                <h5 className="mb-0">1%</h5>
                                <h6 className="mb-0">Buy-back & Burn</h6>
                            </div>
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