import React from 'react';
import styles from '../style';
import { discount, hero_img } from '../assets';

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">15%</span> Discount For{" "}
            <span className="text-white">1 Year</span> Membership
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Advance <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Virtual</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Option Trading
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        A team of experienced traders and coders were brought in to develop a cutting-edge virtual option trading platform. Niota is a one-stop solution for practice, analysis, and learning option trading, offering a wide range of features and capabilities.

        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero_img} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] top-50 pink__gradient" /> */}
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient top-0" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-10 bottom-100 blue__gradient" />
        {/* gradient end */}
      </div>


    </section>
  )

export default Hero
