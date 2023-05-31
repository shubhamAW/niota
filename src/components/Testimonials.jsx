import React, { useState } from "react";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { feedback } from "../constants";

const Testimonials = () => {
  const [noOfCards, setNoOfCards] = useState(3);
  const showMore = () => {
    //  setNoOfCards(feedback.length);
    noOfCards === 3 ? setNoOfCards(feedback.length) : setNoOfCards(3);
  };

  const noOfrow = feedback.slice(0, noOfCards);

  return (
    <section
      id="about_us"
      className={`${styles.paddingY}  ${styles.flexCenter} flex-col relative sm:ml-32 ml: `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:ml-10 sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {noOfrow.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
      <button
        className="py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none"
        onClick={() => showMore()}
      >
        {" "}
        {noOfCards > 3 ? "Show less " : "Show more"}
      </button>
    </section>
  );
};

export default Testimonials;
