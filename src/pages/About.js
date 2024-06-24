import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='text-center'>
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y:0 }}
      viewport={{once:true}}
      transition={{
        ease: "linear",
        duration: 1,
        y: { duration: 0.5 }
      }}
    >
      <h1 className='text-4xl font-bold'>About</h1>
      <p className='mx-4'>Information about me.</p>
    </motion.div>
    </div>
  );
};

export default About;
