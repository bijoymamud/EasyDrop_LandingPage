import React from 'react'
import Review from '../Review/Review'
import WhyEasyDrop from '../WhyEasyDrop/WhyEasyDrop'
import HowToStartSection from '../HowToStart/HowToStartSection'
import Statistics from '../Statistics/Statistics'
import ShopCategory from '../ShopCategory/ShopCategory'

function Home() {
    return (
        <div>
            <Review/>
            <HowToStartSection/>
            <WhyEasyDrop/>
            <Statistics/>
            <ShopCategory/>
        </div>
    )
}

export default Home

