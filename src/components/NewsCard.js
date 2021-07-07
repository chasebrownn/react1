import React from 'react'
import { Link } from 'react-router-dom';

function NewsCard(props) {
    return (
        <>
            <li className="news__item">
                <Link className="news__item__link" to={props.path}>
                    <figure className="news__item__pic-wrap" data-category={props.label}>
                        <img className="news__item__img" src={props.src} alt="Travel Image" />
                    </figure>
                    <div className="news__item__info">
                        <h5 className="news__item__text">{props.text}</h5>
                        <button className="news__item__button">{props.button}</button>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default NewsCard
