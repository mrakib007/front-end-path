import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import cn from '../../utils/cn';

// `bg-purple-500 px-3 py-2 rounded-md ${className}
// ${variant == "outline" ? "border border-purple-500 bg-opacity-10" : ""}`

const Button = ({ className, variant }) => {
    const getVariant = () => {
        switch(variant) {
            case "outline":
                return "btn-outline";
            case "ghost":
                return "btn-ghost";
            default:
                return "btn-solid";
        }
    };
    return (
        <button
            className={cn(
                getVariant(variant),
                className)}>
            Click
        </button>
    );
};

export default Button;