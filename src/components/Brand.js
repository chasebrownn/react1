import React from 'react'
import './Brand.css';

import { Container, Row, Col } from 'react-bootstrap';

function Brand() {
    return (
        <div className="brand" id="brand">
            <Container className="large-container">
                <Row className="align-items-center justify-content-center">
                    <Col xs={12} xl={3}>
                        <h2>BROUGHT TO YOU BY </h2>
                    </Col>
                    <Col xs={12} xl={3}>
                        <a href="https://noble.gg/" alt="Noble Site">
                            <img style={{ maxHeight: "8.5em" }} src={require('./content/images/noble-logo.png').default} alt="Noble Gaming" />
                        </a>
                    </Col>
                    <Col xs={12} xl={3}>
                        <h2>NOBLE GAMING</h2>
                    </Col>
                </Row>
                <a name="team"></a>
            </Container>
        </div>
    )
}

export default Brand