import { useMotionValueEvent, useScroll,motion } from 'framer-motion';
import React from 'react';

const Lesson8 = () => {
    const {scrollY,scrollYProgress} = useScroll();
    // useMotionValueEvent(scrollY,'change',(e)=>{
    //     console.log(e);
    // })
    // useMotionValueEvent(scrollYProgress,'change',(e)=>{
    //     console.log(e);
    // })
    return (
        <motion.div className='w-full fixed top-0 bg-green-500'
        style={{scaleX:scrollYProgress}}
        >new</motion.div>
    );
};

export default Lesson8;