import React, { useEffect } from 'react';
import {motion,useAnimate} from 'framer-motion'

const Lesson5 = () => {
    const [scope, animate] = useAnimate();
    useEffect(()=>{
        animate(
            [
                [scope.current, {rotate: 45}],
                [scope.current, {opacity: 1}],
                [scope.current, {rotate: 90}],
                [scope.current, {opacity: 1}],
                [scope.current, {rotate: 135}],
                [scope.current, {opacity: 1}],
                [scope.current, {x: -100}],
            ]
        );
    },[])
   
    return (
        <div className='border border-red-500 size-[600px] flex flex-col justify-center items-center'>
            <div
            className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5'
            ref={scope}
            >
            </div>
        </div>
    );
};

export default Lesson5;