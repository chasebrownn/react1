import React from 'react'
import './Roadmap.css';

function Roadmap() {
    return (
        <div className="roadmap" id="roadmap">
            <div className="roadmap-container">
                <div className="roadmap-header">
                    <div data-aos="zoom-in-up">
                        <h2>ROADMAP</h2>
                        <h3>2021</h3>
                    </div>
                </div>
                <img src={require('./content/images/roadmap.png').default} className="roadmap-img" />
            </div>
        </div>
    )
}

export default Roadmap