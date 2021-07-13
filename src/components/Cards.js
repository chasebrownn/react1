import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='team-cards'>
            <div className='headings rubik mb-5'>
                <div data-aos="zoom-in-up">
                    <h1 className="text-white">
                        MEET THE <span className="text-highlight">TEAM</span>
                    </h1>
                </div>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/kyle-headshot.jpg').default}
                            text="Kyle McDougal"
                            label="CEO"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/mike-headshot.jpg').default}
                            text="Mike Sancho"
                            label="CMO"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/larenzo-headshot.jpg').default}
                            text="Larenzo Dalis"
                            label="Twin 1"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/alonzo-headshot.jpg').default}
                            text="Alonzo Dalis"
                            label="Twin 2"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/cory_headshot.JPG').default}
                            text="Cory Carruth"
                            label="Noble CEO"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/Matt-Headshot.jpg').default}
                            text="Matthew Merrill"
                            label="Software Developer"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Software Developer"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/zack_headshot.jpg').default}
                            text="Zack Swore"
                            label="Web Developer"
                        />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Cards