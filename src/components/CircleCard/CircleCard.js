import React from 'react';
import './circle.css';

function CircleCard ( props ) {
    const { title, description, color } = props;

    return (
        <div className="circle" style={{ backgroundColor: `${color}` }}>
            <h3>{title}</h3>
            <div>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default CircleCard;