import React from 'react'
import NewsItem from './NewsCard';
import './News.css';

function Cards() {
    return (
        <div className='News-feed'>
            <div className="news__container">
                <div className="news__wrapper">
                    <NewsItem src={require('./content/images/news1-header.png').default}
                        text="Nobility token NBL will be available for trade on Pancake Swap for Binance Coin aka BNB starting July 12th exclusively on the Pancake Swap platform "
                        label="FAIR LAUNCH"
                        path="/launch"
                        button="BUY NOW"
                    />
                </div>
            </div>
        </div>
    )
}

export default Cards