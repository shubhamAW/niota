import React from 'react'
import { pricingPlans } from '../constants'
import Pricing from './Pricing'
import styles, { layout } from "../style";

const PricingCard = () => {
  return (
    <div className='px-20' id="pricing">
        <div  className={styles.heading2}>
            Pricing Plans
        </div>
        <div className="flex flex-row justify-center ">
        {pricingPlans.map((plan, index) => (
        <Pricing
            key={index}
            color={plan.color}
            variant={plan.variant}
            title={plan.title}
            price={plan.price}
            features={plan.features}
        />
        ))}
    </div>
    </div>
     
  )
}

export default PricingCard