import React from 'react';
import "../styles/Exhibit.css"

export default function Exhibit({ title, paragraph }) {
    return (
        <div className='card-wrap'>
            <h1 className='card-title'>{title}</h1>
            <p1 className='card-paragraph'>{paragraph}</p1>
        </div>
    );
}