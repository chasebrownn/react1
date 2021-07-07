import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            
            <div className='headings'>
                <h1>MEET THE</h1> <h2>TEAM</h2>
            </div>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/mike-headshot.jpg').default}
                            text="Mike Sancho"
                            label="Chief Marketing Officer"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/kyle-headshot.jpg').default}
                            text="Kyle McDougal"
                            label="Chief Executive Officer"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/larenzo-headshot.jpg').default}
                            text="Larenzo Dalis"
                            label="Twin 1"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/alonzo-headshot.jpg').default}
                            text="Alonzo Dalis"
                            label="Twin 2"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/meme1.jpg').default}
                            text="Cory"
                            label="Noble CEO"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
