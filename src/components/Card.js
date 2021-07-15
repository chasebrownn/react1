import React from 'react'
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <>
            <div className="card news-card mb-4">
                <div className="team-image">
                    <img src={props.src} className="card-img-top"/>

                    <div className="team-label text-highlight">
                        {props.label}
                    </div>
                </div>
                    
                <div className="card-body">
                    <h5 className="cards__item__text">{props.text}</h5>
                    <a target="_blank" href={props.insta}>
                        <img src={props.image} className="card-social-insta"/>
                    </a>  
                </div>
            </div>
        </>
    )
}

export default Card
