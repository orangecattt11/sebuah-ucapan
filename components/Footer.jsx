'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[18px] text-white">Orange Cat 2023</h4>
          <p className="font-bold text-[14px] text-white opacity-80">
            Thanks to "The Best Friend"
          </p>
          <div>
            <p className="font-normal text-[14px] text-white opacity-50">
              Inspired by{' '}
              <a href="https://www.youtube.com/@javascriptmastery">JavaScript Mastery</a>
            </p>
            <p className="font-normal text-[14px] text-white opacity-50">
              Image 1 by{' '}
              <a href="https://www.freepik.com/free-photo/view-adorable-3d-cats_45138596.htm#query=cat%20illustration%203d&position=15&from_view=search&track=ais">
                Freepik
              </a>
            </p>
            <p className="font-normal text-[14px] text-white opacity-50">
              Image 2 by{' '}
              <a href="https://www.freepik.com/free-photo/view-adorable-3d-cats_45138592.htm#query=cat%20illustration%203d&position=12&from_view=search&track=ais">
                Freepik
              </a>
            </p>
            <p className="font-normal text-[14px] text-white opacity-50">
              Image 3 by{' '}
              <a href="https://www.freepik.com/free-photo/view-adorable-3d-cat_45138549.htm#query=cat%203d&position=10&from_view=search&track=ais#position=10&query=cat%203d">
                Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
