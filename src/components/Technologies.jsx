import { RiReactjsLine } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "motion/react"

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1
        
        className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiCss3Fill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounder-2xl border-4 border-neutral-800 p-4">
                < RiHtml5Fill className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptFill className="text-7xl text-cyan-400" />
            </motion.div>
        </div>

    </div>
);
};

export default Technologies;