import React from 'react'
import { Link } from 'react-router-dom';

function NewsCard(props) {
    return (
        <>
            <div className={"card "+props.variant}>
                <img src={props.src} className="card-img-top"/>

                <div className="news-label text-center">
                    {props.label}
                </div>

                <div className="card-body">
                    <p>{props.text}</p>
                    <a target='_blank' href={props.path}>
                        <button className="btn btn-primary news-button btn-lg w-100">
                            {props.button}
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NewsCard
