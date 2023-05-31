import React from "react";
import styles, { layout } from "../style";
import { tools } from "../constants";
import { play_store_logo, app_store_logo } from "../assets";

const CardLayout = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== tools.length - 1 ? "mb-6" : "mb-0"
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

const ToolCard = () => {
  return (
    <section id="download" className={layout.section}>
      <div className={`${layout.sectionImg} flex-col`}>
        {tools.map((tool, index) => (
          <CardLayout key={tool.id} {...tool} index={index} />
        ))}
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
        Easily trade with <br className="sm:block hidden" />various orders.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Everything you need to learn option trading and master your new trading strategies.
        </p>

        {/* <img src={play_store_logo} alt="Play store" /> */}
        <a href="https://play.google.com/store/apps/details?id=com.sharad.NseIndicesOptionVirtualTrading&hl=en&gl=US">
           <img src={play_store_logo} alt="Play store" />
       </a>

      </div>
    </section>
  );
};

export default ToolCard;
