import React from 'react';
import { motion } from 'framer-motion';
import Grid from '../../components/Grid';
import Banner from '../../components/Banner';

function Landing() {
  return (
    <div className="landing-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}>
        <Banner />
        <Grid />
      </motion.div>
    </div>
  );
}

export default Landing;
