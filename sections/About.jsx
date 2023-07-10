'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Selamat Ulang Tahun Aniz,</span> semoga di tahun ke 22 kamu semakin bahagia, sehat selalu, dapat uang kaget 1T dan
        bertemu orang yang tepat buat kamu. Jangan lupa{' '}
        <span className="font-extrabold text-white">
          selesaikan skripsimu
        </span>{' '}
        agar bisa segera pulang ke depok untuk bertmu keluarga tercinta dan teman-temanmu disini.{' '}
         Semoga kedepannya kamu bisa terus <span className="font-extrabold text-white">membahagiakan</span> orang-orang sekitarmu.{' '}
        <span className="font-extrabold text-white">Aminn</span>.
      </motion.p>
    </motion.div>
  </section>
);

export default About;
