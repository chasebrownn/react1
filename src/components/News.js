import React from 'react'
import NewsItem from './NewsCard';
import './News.css';

import { Container, Row, Col } from 'react-bootstrap';

function Cards() {
    return (
        <>
            <div className="news-cards">
                <Container className="large-container">
                    <Row className="align-items-center pb-5">
                        <Col xs={12} xl={3}>
                            <div data-aos="zoom-in" className="pulse">
                                <NewsItem className="mb-3" src={require('./content/images/news1-header.png').default}
                                    text="Nobility token (NBL) will be available for trade on PancakeSwap via BSC (Binance Smart Chain) starting July 13th beginning exclusively on the PancakeSwap platform.    "
                                    label="FAIR LAUNCH"
                                    path="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xA995276A5fb2742B51615bc7DD59F404De82E034"
                                    variant="news-card"
                                    button="BUY NOW"
                                />
                            </div>
                        </Col>
                        <Col xs={12} xl={3}>
                            <div data-aos="zoom-in">
                                <NewsItem className="mb-3" src={require('./content/images/news2-header.png').default}
                                    text="The Nobility community discord server will be launching very soon! Here we’ll release the latest news on tournaments and exclusive news for our Nobility members.      "
                                    label="NOBILITY DISCORD"
                                    variant="news-card-comingsoon-dark"
                                    button="COMING SOON"
                                />
                            </div>
                        </Col>
                        <Col xs={12} xl={3}>
                            <div data-aos="zoom-in">
                                <NewsItem className="mb-3" src={require('./content/images/news3-header.png').default}
                                    text="Nobility token (NBL) will be featured on CoinMarketCap, CoinGecko, and other tracking websites following the launch. We're looking to list on our first exchange in Q1."
                                    label="FEATURED LISTINGS"
                                    variant="news-card-comingsoon-dark"
                                    button="COMING SOON"
                                />
                            </div>
                        </Col>
                        <Col xs={12} xl={3}>
                            <div data-aos="zoom-in">
                                <NewsItem className="mb-3" src={require('./content/images/news4-header.png').default}
                                    text="With community involvement, the Nobility team will be hosting major LAN esports tournaments with big gamers, influencers, and content creators!‎‎‎‎ Expect updates on this soon!"
                                label="FIRST TOURNAMENT"
                                variant="news-card-comingsoon-dark"
                                button="COMING SOON"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Cards