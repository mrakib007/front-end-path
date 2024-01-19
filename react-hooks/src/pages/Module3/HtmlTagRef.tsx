import React, { useEffect, useRef } from 'react';
import CustomInput from '../../components/CustomInput';

const HtmlTagRef = () => {
    const myRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log(myRef.current);
        myRef.current?.focus();
    }, []); 
    return (
        <div>
            <h1>Use Ref</h1>
            <form>
                <CustomInput ref={myRef} className='border border-blue-500'/>
                <button type='submit'></button>
            </form>
        </div>
    );
};

export default HtmlTagRef;