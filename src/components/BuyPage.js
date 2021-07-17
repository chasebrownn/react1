import React from 'react'
import './../App.css'
import './HowToBuy.css';
import Footer from './Footer';
import BuyHero from './BuyHero';
import { Container, Row, Col } from 'react-bootstrap';

function BuyPage () {
    return (
        <>
            <div className="howtobuy" id="howtobuy">
                <Container className="Small-container">
                    <Row className="align-items-center pb-5">
                        <div data-aos="zoom-in-up">
                                <h2>HOW TO PURCHASE $NBL/NOBILITY</h2>
                        </div>
                        <div className="buy-spacer"> </div>
                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>1. Download these apps if you don't already have them: </p>
                                    
                                    <p className='htb-substep'> Trust Wallet | Crypto.com | Metamask</p>

                                    <div class="buy-image"><img className="img-fluid" src={require('./content/images/buy-logos.png').default}/></div>
                                </div>
                            </div>

                            <div className="buy-spacer"> </div>

                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>2. Download Trust Wallet first, when setting up be sure to Save your 12 word phrase on PAPER. Be VERY precise when you’re writing these phrases down. Also, do not screenshot it and do not send it to anyone. Keep in a safe, secured place.</p>
                                    
                                    <div className="buy-image"><img src={require('./content/images/zero.png').default}/></div>
                                    
                                    <p className='htb-step'><i>**If you lose these keywords you will NOT be able to get into your account, and your moneywill be locked up forever.**</i></p>
                                </div>
                            </div>
                            <div className="buy-spacer"> </div>
                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>3. Click BNB</p>
                                    
                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/one.png').default}/></div>
                                                
                                    <p className='htb-substep'>- Receive</p>
                                    
                                    <p className='htb-substep'>- Copy the Wallet address (That will be the address you will send the BNB that you're about to purchase from crypto.com)</p>
                                    
                                  </div>
                            </div>                           
                            
                            <div className="buy-spacer"> </div>

                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">

                                    <p className='htb-step'>4. Now go to Crypto.com app</p>

                                    <p className='htb-substep'>- Make sure you’re Verified.</p>
                                    
                                    <p className='htb-substep'>- Now you are going to buy BNB</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/two.png').default}/></div>

                                    <p className='htb-substep'>- Click the bottom middle button</p>

                                    <p className='htb-substep'>- Select BUY at bottom</p>

                                    <p className='htb-substep'>- Search BNB</p>

                                    <p className='htb-substep'>- Select Crypto wallet</p>

                                    <p className='htb-substep'>- Enter the amount you want to buy</p>

                                    <p className='htb-substep'>- Then select Credit Card</p>

                                    <p className='htb-substep'>- add Credit or Debit Card</p>

                                    <p className='htb-substep'>- Then select Buy BNB.</p>

                                    <p className='htb-substep'>- Confirm!</p>
                                    </div>
                            </div>   
                            <div className="buy-spacer"> </div>

                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>5. Once the BNB is purchased go back to Home Screen and at the top you should see your Total Balance.</p>

                                    <p className='htb-substep'>- Select Transfer</p>

                                    <p className='htb-substep'>- Withdraw</p>

                                    <p className='htb-substep'>- Select External Wallet</p>

                                    <p className='htb-substep'>- COPY AND PASTE YOUR TRUST WALLET BNB ADDRESS</p>

                                    <p className='htb-substep'>- Open Email and Confirm your Wallet Address</p>

                                    <p className='htb-substep'>-Click the Wallet Address again</p>

                                    <p className='htb-substep'>-Check the “don't need Memo for this account button”</p>

                                    <p className='htb-substep'>- And Submit</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/three.png').default}/></div>
                                    </div>
                            </div>   
                            <div className="buy-spacer"> </div>
                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>6. Go back to Trust Wallet (may take 30 min max to transfer)</p>

                                    <p className='htb-step'>Once the BNB hits, you need to Swap it for BNB Smartchain!</p>

                                    <p className='htb-substep'>- Click BNB</p>

                                    <p className='htb-substep'>- Click the 3 circles “more” button (you buy everything with smartchain)</p>

                                    <p className='htb-substep'>- Click Swap to Smart Chain</p>

                                    <p className='htb-substep'>- Under “you pay” be sure to put it to 100% max</p>

                                    <p className='htb-substep'>- Then select Swap</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/four.png').default}/></div>
                                   </div>
                            </div>   
                            <div className="buy-spacer"> </div>
                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className='htb-step'>7. Now we are going to access pancake swap Via WalletConnect</p>
                                    
                                    <p className='htb-substep'> Step 1 - Open PancakeSwap on Mobile Browser Type the URL https://exchange.pancakeswap.finance on your Safari browser. Tap on Go to proceed. If you are using Safari browser on your iPad, you need to turn off the Request Desktop Website setting. Or you can also use Google Chrome to open the site.</p>
                                    
                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/five.png').default}/></div>

                                    <p className='htb-substep'>Step 2 - Access WalletConnect Tap on the Connect button on PancakeSwap to see the Connect to a wallet menu. Choose WalletConnect.</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/six.png').default}/></div>

                                    <p className='htb-substep'>- On the list of supported wallets, choose Trust Wallet. Launch the Trust Wallet app by tapping on Open.</p>
                                
                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/seven.png').default}/></div>

                                    <p className='htb-substep'>Step 3 - Connect Trust Wallet The WalletConnect screen will show up on the Trust Wallet app. Tap on Connect to complete the connection of the app to the PancakeSwap DApp.</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/eight.png').default}/></div>

                                    <p className='htb-substep'>At this point, your Smart Chain wallet is now connected to PancakeSwap. You can now return to your Safari browser to confirm.</p>
                            
                                    <p className="htb-substep">Swap Tokens on PancakeSwap via WalletConnect You can start swapping tokens on PancakeSwap like you would normally do on a DAppbrowser. There is just an additional step, wherein you will have to switch between Trust Wallet and your mobile browser in order to approve transactions.</p>
                                    </div>
                            </div>   
                            <div className="buy-spacer"> </div>
                            <div class="card border-0 shadow">
                                <div className="htb-steps mb-5 pd-5">
                                    <p className="htb-step">8. Now it's time to buy NOBILITY!</p>

                                    <p className="htb-substep">- Click the Three lines by the Exchange tab.</p>

                                    <p className="htb-substep">- Set slippage to 12% or 15%</p>

                                    <p className="htb-substep">- Now save some BnB for the Network Fee when swapping, tap “select a currency” and paste the Nobility Contract address.</p>

                                    <p className="htb-substep">-Address: 0xa995276a5fb2742b51615bc7dd59f404de82e034</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/nine.png').default}/></div>

                                    <p className="htb-substep">- Now select the amount of BnB you want to swap for Nobility and Confirm the Swap.</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/ten.png').default}/></div>

                                    <p className="htb-step">Congratulations! You have bought $NBL! To see how much you’re making in USD:</p>

                                    <p className="htb-substep">- Go to Exchange</p>

                                    <p className="htb-substep">- Click BNB and change it to Nobility, you will have to search it by the Nobility Contract address ONLY:</p> 

                                    <p className="htb-substep">Address: 0xa995276a5fb2742b51615bc7dd59f404de82e034</p>

                                    <div className="buy-image"><img className="img-fluid" src={require('./content/images/eleven.png').default}/></div>

                                    <p className="htb-substep">On the second column where it says “Select a Currency” select BNB</p>

                                    <p className="htb-substep">Select MAX and to find out how much USD you have take the amount of NBL x the price of BNB</p>

                                </div>
                            </div>
                    </Row>
                </Container>    
            </div>
        </>
        
    )
}


export default BuyPage