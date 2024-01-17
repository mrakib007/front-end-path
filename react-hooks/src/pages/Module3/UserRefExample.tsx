import React, { useRef, useState } from 'react';

const UserRefExample = () => {
    const [count,setCount] = useState(0);
    const myRef = useRef(0);

    const increment = () =>{
        myRef.current = myRef.current + 1;
        setCount(count+1);
        console.log('state',count);
        console.log('ref',myRef.current);
    }
    
    return (
        <div>
            <h1>useRef</h1>
            <button className='btn btn-primary' onClick={() => increment()}>{myRef.current}</button>
        </div>
    );
};

export default UserRefExample;