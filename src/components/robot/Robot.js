import React from 'react';
import './robot.css';

//component to display the details of a single robot
const Robot = ({robot}) => {
    return (
        <div className="robot">
            <img src={`https://robohash.org/${robot.id}?size=200x200`} alt="robot"/>
            <h3>{robot.name}</h3>
            <p>{robot.email}</p>
        </div>
    );
};

export default Robot;