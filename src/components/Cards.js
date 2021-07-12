import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='team-cards'>

            <div className='headings rubik mb-5'>
                <a name="team"></a>
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
                            path="/services"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/mike-headshot.jpg').default}
                            text="Mike Sancho"
                            label="CMO"
                            path="/services"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/larenzo-headshot.jpg').default}
                            text="Larenzo Dalis"
                            label="Twin 1"
                            path="/services"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/alonzo-headshot.jpg').default}
                            text="Alonzo Dalis"
                            label="Twin 2"
                            path="/services"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/meme1.jpg').default}
                            text="Cory"
                            label="Noble CEO"
                            path="/services"
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardItem src={require('./content/images/Matt-Headshot.jpg').default}
                            text="Matthew Merrill"
                            label="Elevate Developer"
                            path="/services"
                        />
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Cards