import React, { forwardRef } from 'react';
import cn from '../../utils/cn';

// `bg-purple-500 px-3 py-2 rounded-md ${className}
// ${variant == "outline" ? "border border-purple-500 bg-opacity-10" : ""}`

type TRef = HTMLButtonElement;
type TVariant = "outline" | "ghost" | "solid";
type TButton = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement> & TButtonOptions;
type TButtonOptions = {
    variant?: TVariant;
}

const Button = forwardRef<TRef, TButton>(({ className, variant = "solid", ...rest },ref) => {
    const getVariant = (variant : TVariant) => {
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
        {...rest}
        ref={ref}
            className={cn(getVariant(variant),className)}>
            Click
        </button>
    );
});

export default Button;