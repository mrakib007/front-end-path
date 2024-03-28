import useScrollGrowHook from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const BatteryReplacement = () => {
    const {style,componentRef} = useScrollGrowHook();
    // const xValue = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
    return (
        <motion.div
            style={
                style
                // x: xValue
            }
            ref={componentRef}
            className="bg-light-gray h-[415px] rounded-2xl col-span-12">

        </motion.div>
    );
};

export default BatteryReplacement;