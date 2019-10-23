import React from 'react';
import './scroll.css';

//component to make its children components scrollable
const Scroll = ({children}) => {
    return (
        <div className="scroll">
            {children}
        </div>
    );
};

export default Scroll;