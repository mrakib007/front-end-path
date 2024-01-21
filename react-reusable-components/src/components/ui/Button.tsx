import React from 'react';

const Button = ({className}) => {
    return (
        <button className={`bg-red-500 ${className}`}>
            Click
        </button>
    );
};

export default Button;