import React from 'react'
import './Tokenomics.css';
import { Container, Row, Col } from 'react-bootstrap';

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
                        4% go toward our liquidity pool, 2% will be sent to a prize pool wallet which will represent the total prize pool for our monthly esports tournaments.
                        The burn address is receiving reflection rewards the same as a holder would giving the token an inherent burn, which will fluctuate dependant on volume.</p>
                    <div className="tokenomics-display">
                        <img src={require('./content/images/tokenomics-main.png').default} className="roadmap-img" />
                    </div>
                </Row>
            </Container>    
        </div>
    )
}

export default Tokenomics