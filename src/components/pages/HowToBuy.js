import React from 'react'
import '../../App.css'
import '../HowToBuy.css';
import Footer from '../Footer';
import BuyHero from '../BuyHero';
import { Container, Row, Col } from 'react-bootstrap';

export default function HowToBuy () {
    return (
        <>
        <BuyHero/>
        <div className="howtobuy" id="howtobuy">
            <Container className="Small-container">
                <Row className="align-items-center pb-5">

                <a className="anchor" name="metamask"></a>

                    <div data-aos="zoom-in-up">
                            <h2>METAMASK</h2>
                    </div>
                    <div className="metamask">
                        <ol>
                            <div className='htb-steps'>1. Go to <a href='https://metamask.io'>Metamask</a> and download for your device.</div>
                            <div className='htb-steps'>2. After downloading, set up and new wallet and save your keys.</div>
                            <div className='htb-steps'>3. Add Binance Smart Chain to your network list by clicking on the dropdown and selecting "Custom RPC".</div>
                            <div className='htb-steps'>4. Enter the config below and save.</div>
                            <div className='htb-steps'>5. Click <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA995276A5fb2742B51615bc7DD59F404De82E034">here</a> to go to Pancake Swap.</div>
                            <div className='htb-steps'>6. Connect your wallet.</div>
                            <div className='htb-steps'>7. Enter the amount of $NBL you want and change slippage to 6%</div>
                            <div className='htb-steps'>8. Confirm the trade.</div>
                            <div className='htb-steps'>9. Confirm the trade in Metamask.</div>
                        </ol>
                    </div>

                    <a className="anchor" name="trustwallet"></a>

                    <div data-aos="zoom-in-up">
                            <h2>TRUST WALLET</h2>
                    </div>
                    <div className="trustwallet">
                    <ol>
                        <div className='htb-steps'>1. Go to <a href='https://trustwallet.com/'>Trust Wallet</a> and download for your device.</div>
                        <div className='htb-steps'>2. Buy Binance Smart Chain $BNB tokens.</div>
                        <div className='htb-steps'>3. Add Binance Smart Chain to your network list by clicking on the dropdown and selecting "Custom RPC".</div>
                        <div className='htb-steps'>4. Enter the config below and save.</div>
                        <div className='htb-steps'>5. Click here to go to Pancake Swap</div>
                        <div className='htb-steps'>6. Press “Connect”.</div>
                        <div className='htb-steps'>7. Choose Trust Wallet.</div>
                        <div className='htb-steps'>8. Connect to your Trust Wallet to Pancake Swap.</div>
                        <div className='htb-steps'>9. Go back to Pancake Swap in your browser.</div>
                        <div className='htb-steps'>10. If prompted, import the $MONSTA token.</div>
                        <div className='htb-steps'>11. Click the Settings icon.</div>
                        <div className='htb-steps'>12. Set slippage to 6%.</div>
                        <div className='htb-steps'>13. Enter the amount you want to swap and click "Swap", and then "Confirm".</div>
                        <div className='htb-steps'>14. Click "Send" in Trust Wallet.</div>
                        <div className='htb-steps'>15. Copy the $NBL contract address here: 0xA995276A5fb2742B51615bc7DD59F404De82E034</div>
                        <div className='htb-steps'>16. Open Trust Wallet and press the toggle in the top right corner.</div>
                        <div className='htb-steps'>17. Search for "NBL". If nothing is returned, press "add Custom Token".</div>
                        <div className='htb-steps'>18. Paste the $NBL contract address the copied earlier: 0xA995276A5fb2742B51615bc7DD59F404De82E034</div>
                        <div className='htb-steps'>19. Press "Save".</div>
                    </ol>
                    </div>
                </Row>
            </Container>    
        </div>
            
        <Footer/>
        </>
        
    )
}
