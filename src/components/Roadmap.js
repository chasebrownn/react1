import React from 'react'
import './Roadmap.css';

function Roadmap() {
    return (
        <div className="roadmap">
            <div className="roadmap-container">
                <div className="roadmap-header">
                    <div data-aos="zoom-in-up">
                        <h2>ROADMAP</h2>
                        <h4>2021</h4>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <div id="content">
                                        <ul class="timeline">
                                            <li class="event" data-date="Quarter 1">
                                                <h3>Launch and List</h3>
                                                <p>The most fun part of our roadmap and that is launching our new cryptocurrency.
                                                Our goal is to launch, establish our digital footprint, including social media and web
                                                presence, and get listed on exchanges such as CoinMarketCap and CoinGecko. Our
                                                initial goal is to spread our purpose amongst the esports space and create momentum
                                                before launching tournaments and taking advantage of our prize pool.</p>
                                            </li>
                                            <li class="event" data-date="Quarter 2">
                                                <h3>Implement</h3>
                                                <p>Post launch our goal is to implement monthly esports tournaments with professional
                                                gamers, influencers, and content creators. We also plan on adding Nobility as a payment
                                                option on Noble.gg for merchandise and donations specifically for Noble streamers and
                                                competitive gamers. Another crucial piece to quarter 2 is integrating weekly AMA’s.</p>
                                            </li>
                                            <li class="event" data-date="Quarter 3">
                                                <h3>Scale</h3>
                                                <p>Scale Nobility team and competitions. Maintain token utility and establish more exchanges.
                                                Establish Nobility as a payment option on other platforms, such as Twitch, Blizzard, Steam,
                                                and organizations alike. In Q2 we also intend to integrate Noble players and contracts onto
                                                Nobility’s blockchain for easier and more efficient salary payouts and competition bonuses.</p>
                                            </li>
                                            <li class="event" data-date="Quarter 4">
                                                <h3>Elevate</h3>
                                                <p>As the Nobility token continues to elevate not only as a currency, but as an esports based
                                                brand, in Q4 we plan on introducing annual Nobility LAN tournaments that will spotlight
                                                the biggest esports content creators and influencers for a significant price pool. We plan on
                                                scaling our blockchain contract system as we adopt more gamers and gaming teams alike.
                                                We also intend on developing a skin and in-game NFT marketplace and create our own
                                                sportsbook allowing people to safely bet on esports tournaments and teams using Nobility
                                                as the median.</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roadmap