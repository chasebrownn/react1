import React from 'react'
import NewsItem from './NewsCard';
import './News.css';

function Cards() {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news1-header.png').default}
                            text="Nobility token (NBL) will be available for trade on PancakeSwap via BSC (Binance Smart Chain) starting July 12th beginning exclusively on the PancakeSwap platform."
                            label="FAIR LAUNCH"
                            path="/launch"
                            variant="news-card"
                            button="BUY NOW"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news2-header.png').default}
                            text="The Nobility community discord server will be launching very soon! Here we’ll release the latest news on tournaments and exclusive news for our Nobility members."
                            label="NOBILITY DISCORD"
                            path="/launch"
                            variant="news-card-dark"
                            button="COMING SOON"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news3-header.png').default}
                            text="Nobility token (NBL) will be featured on CoinMarketCap, CoinGecko, and other tracking websites following the launch. We're looking to list on our first exchange in Q1."
                            label="FEATURED LISTINGS"
                            path="/launch"
                            variant="news-card"
                            button="COMING SOON"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news4-header.png').default}
                            text="With community involvement, the Nobility team will be hosting major LAN esports tournaments with big gamers, influencers, and content creators!"
                            label="FIRST TOURNAMENT"
                            path="/launch"
                            variant="news-card-dark"
                            button="COMING SOON"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards