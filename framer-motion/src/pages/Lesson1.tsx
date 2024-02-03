import React, { useRef } from 'react';
import { easeInOut, motion } from 'framer-motion';

const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
            opacity: 0.6,
            scale: 1, 
            transition: {
            ease: 'easeInOut',
            duration: 0.5,
            // delayChildren: 0.5,
            // staggerChildren: 0.5
        }
    },
    hover: {
        opacity: 1
    },
    tap: {
        scale: 1.1,
        boxShadow: '0px 0px 8px 8px #000'
    }
}

// const child = {
//     hidden: { opacity: 0, scale: 0.1 },
//     visible: { opacity: 1, scale: 1 },
// }

const Lesson1 = () => {
    const parentRef = useRef(null);
    return (
        <div ref={parentRef} className='border border-red-500 size-[700px] flex justify-center items-center'>
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center items-center"
                variants={parent}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                // whileTap='tap'
                drag
                // dragSnapToOrigin
                dragElastic={0.7}
                dragConstraints={parentRef}
                whileTap='tap'
                // dragConstraints={{left: -200,right: 200, top : -200, bottom: 200}}
            >
            </motion.div>
        </div>
    );
};

export default Lesson1;