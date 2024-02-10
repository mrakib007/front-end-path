import { motion, inView, ElementOrSelector, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
const Lesson4 = () => {
    const ref = useRef<HTMLDivElement>(null);

    // useEffect(() =>{
    //     inView(ref.current as ElementOrSelector,(info) => {
    //         console.log('in view',info);
    //     });
    // },[])

    const inView = useInView(ref,{once: true});
    console.log(inView)

    return (
        <div className='border border-red-500 size-[600px] flex flex-col justify-center'>
            <motion.div className='size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5'
            ref={ref}
            animate={inView ? {opacity : 1, x: 0 , transition: 0.7} : {opacity: 0, x: -500}}>
            </motion.div>
        </div>
    );
};

export default Lesson4;