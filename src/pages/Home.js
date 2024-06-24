import React from 'react';
import { motion } from "framer-motion";
import ThreeModel from '../components/ThreeModel';

const Home = () => {
  return (
    <div className="relative h-full w-full">
      <ThreeModel />
      <div className="text-center absolute top-0 left-0 p-4 text-white">
        
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
      <h1 className="text-4xl font-bold">Welcome to My 3D Model Page</h1>
        <p className="mt-2 text-lg">This is a cool 3D model demonstration.</p>
        <p className="mt-2 text-lg">You can add more content here as needed.</p>
    </motion.div>
      </div>
    </div>
  );
};

export default Home;
