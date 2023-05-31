import React from 'react'
import styles, { layout } from "../style";
import { orders } from "../constants";
import Button from "./Button";
import ButtonStock from './ButtonStock';


const CardLayout = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== orders.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const OrderCard = () => {
  return (
    <section id="stockpred" className={layout.section}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
       Stock predictor tool <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Use cutting-edge analysis tools to improve the learning experience for traders to the next level.
      </p>

      <ButtonStock styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {orders.map((feature, index) => (
        <CardLayout key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  )
}

export default OrderCard
