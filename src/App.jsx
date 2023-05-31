import React from 'react'
import styles from './style'
import {Navbar, Hero, Stats, FeatureCard, OrderCard, ToolCard, Testimonials, CTA, Footer,PricingCard } from './components'
import { pricingPlans } from './constants';

const App = () =>  (
    <div className="bg-primary w-full overflow-hidden">
      <div className='{`${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          < Navbar />
        </div>
      </div>

      <div className='{`${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <Hero/>
          <Stats/>
        </div>
      </div>

      <div className='{`${styles.paddingX} ${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <FeatureCard/>
          <ToolCard/>
          <PricingCard/>
          <OrderCard/>
          <Testimonials/>
          <CTA/>
        </div>
      </div>

      <div className='{`${styles.paddingX} ${styles.paddingX} $styles.flexCenter`}'>
        <div className='{`$styles.bocWidth`}'>
          <Footer/>
        </div>
      </div>
    </div>
    
  );

export default App
