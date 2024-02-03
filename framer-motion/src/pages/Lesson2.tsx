import React, { useRef } from 'react';
import { easeInOut, motion } from 'framer-motion';

const parent = {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: {
        x: [0, 300, -300, 0],
        y: [0, 300, -300, 0],
        rotate: [0, 300, -300, 0],
        opacity: 1,
        transition: {
            ease: 'linear',
            opacity: {
                duration: 0.5,
            },
            rotate:{
                delay: 1,
                repeat: Infinity,
            },
            repeat: Infinity,
            duration: 5,
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

const Lesson2 = () => {
    const parentRef = useRef(null);
    return (
        <div ref={parentRef} className='border border-red-500 size-[700px] flex justify-center items-center'>
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center items-center"
                variants={parent}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                drag
                dragElastic={0.7}
                dragConstraints={parentRef}
                whileTap='tap'
            >
            </motion.div>
        </div>
    );
};

export default Lesson2;