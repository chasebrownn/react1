import React from 'react'
import './Tokenomics.css';
import { Container, Row } from 'react-bootstrap';

function Tokenomics() {
    return (
    <div className="tokenomics" id="tokenomics">
            <Container className="large-container">
                <Row className="align-items-center pb-5">
                    <div data-aos="zoom-in-up">
                        <div className="tokenomics-header">
                            <h2>TOKENOMICS</h2>
                        </div>
                    </div>

                    <p className="mb-5 pd-5">For all network transactions done with Nobility: 4% is redistributed by weight to all existing holders on the Binance Smart Chain,
                        4% go toward our liquidity pool, 2% will be sent to the Nobility Use wallet, which will be used for, including, but not limited to, Esports tournament prize pools,
                        marketing, business development, charity donations, scholarship funding, manual burns, community events, and giveaways.
                        The burn address is receiving reflection rewards the same as a holder would giving the token an inherent burn, which will fluctuate dependant on volume.</p>
                    <div className="tokenomics-display">
                        <img img class="img-fluid" src={require('./content/images/tokenomics-main.png').default} className="roadmap-img" />
                    </div>
                </Row>
            </Container>    
        </div>
    )
}

export default Tokenomics