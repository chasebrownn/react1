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
                            text="Nobility token NBL will be available for trade on Pancake Swap for Binance Coin aka BNB starting July 12th exclusively on the Pancake Swap platform "
                            label="FAIR LAUNCH"
                            path="/launch"
                            variant="news-card"
                            button="BUY NOW"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news1-header.png').default}
                            text="Nobility token NBL will be available for trade on Pancake Swap for Binance Coin aka BNB starting July 12th exclusively on the Pancake Swap platform "
                            label="FAIR LAUNCH"
                            path="/launch"
                            variant="news-card-dark"
                            button="BUY NOW"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news1-header.png').default}
                            text="Nobility token NBL will be available for trade on Pancake Swap for Binance Coin aka BNB starting July 12th exclusively on the Pancake Swap platform "
                            label="FAIR LAUNCH"
                            path="/launch"
                            variant="news-card"
                            button="BUY NOW"
                        />
                    </div>

                    <div className="col-sm-12 col-lg-3">
                        <NewsItem src={require('./content/images/news1-header.png').default}
                            text="Nobility token NBL will be available for trade on Pancake Swap for Binance Coin aka BNB starting July 12th exclusively on the Pancake Swap platform "
                            label="FAIR LAUNCH"
                            path="/launch"
                            variant="news-card-dark"
                            button="BUY NOW"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards