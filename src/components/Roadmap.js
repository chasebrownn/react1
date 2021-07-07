import React from 'react'
import './Roadmap.css';

function Roadmap () {
    return (
        <div className="roadmap">
            <div className="roadmap-container">
                    <div className="roadmap-header">
                        <h2>ROADMAP</h2>
                        <h3>2021</h3>
                    </div>
                <img src={require('./content/images/roadmap.png').default} className="roadmap-img"/>
            </div>
        </div>
    )
}

export default Roadmap