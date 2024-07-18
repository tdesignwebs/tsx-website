// Card.tsx
''
// <button className='button'><span className='button-inner'>hellowwww</span></button>
import React from 'react';
import imageUrl from '../assets/main-logo.png'
interface CardProps {
    text: string;
    name: string;
}

const Card: React.FC<CardProps> = ({ text, name }) => {
    return (
        <div className='card' >
            <img className='card-image' src={imageUrl} alt="" />
            <h1 className='card-name' >{name}</h1>
            <p className='card-text' >{text}</p>

        </div>
    );
};

export default Card;
