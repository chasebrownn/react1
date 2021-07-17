import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

const PageNotFound = () => (
    <div className="notFound" id="notFound">
        <Container className="large-container">
            <Row className="align-items-center pb-5">
                <div className="notFound-header">
                    <h2>TOKENOMICS</h2>
                </div>

                <Link to="/">
                    Go Home
                </Link>
            </Row>
        </Container>
    </div>
);

export default PageNotFound;