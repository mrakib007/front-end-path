import React from 'react';
import { easeInOut, motion } from 'framer-motion';

const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1, scale: 1, transition: {
            ease: 'easeInOut',
            duration: 2,
            delayChildren: 0.5,
            staggerChildren: 0.5
        }
    },
    hover: {
        scale: 1,
        transition: {
            duration: 0.5
        }
    },
    tap: {
        scale: 1,
        rotate: 45
    }
}

// const child = {
//     hidden: { opacity: 0, scale: 0.1 },
//     visible: { opacity: 1, scale: 1 },
// }

const Lesson1 = () => {
    return (
        <div>
            <motion.div
                className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center items-center"
                variants={parent}
                initial='hidden'
                animate='visible'
                whileHover='hover'
                whileTap='tap'
                onHoverStart={()=> console.log('hover start')}
                onHoverEnd={()=> console.log('hover end')}
            >
            </motion.div>
        </div>
    );
};

export default Lesson1;