import React from 'react';
import { forwardRef } from 'react';

type TCustomInput = {
    className: string;
}

const CustomInput = forwardRef<HTMLInputElement,TCustomInput>(({className},inputRef) => {
    return (
        <div>
            <input
             ref={inputRef} 
             name='name' 
             type='text' 
             className={className}
             />
        </div>
    );
}) 

export default CustomInput;