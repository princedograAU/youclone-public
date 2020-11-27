import React from 'react';

const Backdrop = ({currentState, toggleOpen}) => {
    return (
        <div 
            className={`backdrop ${ currentState ? 'backdrop-open' : '' }`}
            onClick={toggleOpen}
        >
        </div>
    )
}

export default Backdrop;
