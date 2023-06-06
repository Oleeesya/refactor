import React from 'react';
import Card from './Card';

function Page(props) {
    return (
        <div className='page'>
            {props.cards.map(function (item) {
                return (
                    <Card key={item.id} title={item.title.en} linkTitle={item.link_title} href={item.link} text={item.text} linkClassName={item.id == 1 ? 'card__link_color_red' : 'card__link_color_default'} target={item.id == 1 ? '_blank' : ''}
                    />
                );
            })}
        </div>
    )
}

export default Page;