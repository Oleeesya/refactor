import React from 'react';

function Card(props) {
    function analyticsTrackClick() {
        // sending clicked link url to analytics
        console.log('analyticsTrackClick!!!', props.href);
    }

    return (
        <div className="card">
            <div className="card__title">{props.title}</div>
            {props.text && <div className="card__text">{props.text}</div>}
            <a className={`card__link ${props.linkClassName}`} target={props.target} rel={props.rel} href={props.href} onClick={analyticsTrackClick}>
                {props.linkTitle}
            </a>
        </div>
    );
}

export default Card;