import React from 'react';
import { motion } from 'framer-motion';
import GridLogin from '../../components/GridLogin';

function Home() {
  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <GridLogin />
      </motion.div>
    </div>
  );
}

export default Home;
