import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;