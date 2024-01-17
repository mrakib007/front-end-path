import React, { useEffect, useRef } from 'react';

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
                <input ref={myRef} name='name' type='text' className='border border-red-500' />
                <button type='submit'></button>
            </form>
        </div>
    );
};

export default HtmlTagRef;