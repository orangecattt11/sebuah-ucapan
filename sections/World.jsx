'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="a friend, the best friend" textStyles="text-center" />
      <TitleText
        title={(
          <>"Through laughter and tears, adventures and misadventures, a best friend stands as an unwavering pillar of support, making every moment more meaningful"
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/anisdinda.JPG" alt="map" className="w-full h-full object-cover rounded-[70px]" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
