import React, { useEffect, useState } from 'react';
import {motion,useAnimationControls} from 'framer-motion';``

const Lesson3 = () => {
    const [toggle,setToggle] = useState(false);
    const controls = useAnimationControls();
    // const handleToggle = () => {
    //     setToggle(!toggle);
    //     if(toggle){
    //         controls.start({
    //             x: 200,
    //             transition: { duration: 2 }
    //         });

    //     }else{
    //         controls.start({
    //             x: -200,
    //             transition: { duration: 2 }
    //         });
    //     }
    // }

    useEffect(()=>{
        controls.start((i) => ({x: 200, transition: {delay: i*2}}));
    })
  

    return (
        <div  onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.start({x:0,transition:{delay: 2}})} className='border border-red-500 size-[600px] flex flex-col justify-center'>
            {/* <button onClick={handleToggle} className='bg-green-500 mb-10 px-2 py-3'>Forward</button> */}
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 "
            animate={controls}
            custom={1}
           >
            </motion.div>
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 "
            animate={controls}
            custom={2}>
            </motion.div>
            <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 "
            animate={controls}
            custom={3}>
            </motion.div>
            {/* <button onClick={handleToggle} className='bg-green-500 mb-10 px-2 py-3'>Forward</button> */}
        </div>
    );
};

export default Lesson3;