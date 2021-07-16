import React from 'react'
import './Exchanges.css';

import { Container, Row, Col } from 'react-bootstrap';

function Exchanges() {
    return (
        <div className="branding" id="branding-section">
            <Container className="large-container">
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} xl={3}>
                    <a href="https://www.coingecko.com/en/coins/nobility" alt="coingecko">
                            <img style={{ maxHeight: "8.5em" }} src={require('./content/images/branding_coingecko.png').default} alt="coingecko" />
                        </a>
                    </Col>
                    <Col xs={12} xl={3}>
                        <a href="https://www.dextools.io/app/pancakeswap/pair-explorer/0x52e634531b85dee08b3d7df524c23d27bbee103e" alt="dextools">
                            <img style={{ maxHeight: "8.5em" }} src={require('./content/images/branding_dextools.png').default} alt="dextools" />
                        </a>
                    </Col>
                    <Col xs={12} xl={3}>
                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA995276A5fb2742B51615bc7DD59F404De82E034" alt="pancakeswap">
                            <img style={{ maxHeight: "8.5em" }} src={require('./content/images/branding_pancakeswap.png').default} alt="pancakeswap" />
                        </a>
                    </Col>
                </Row>
                <a name="roadmap"></a>
            </Container>
        </div>
    )
}

export default Exchanges