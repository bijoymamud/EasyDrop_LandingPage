import React from 'react'
import Review from '../Review/Review'
import WhyEasyDrop from '../WhyEasyDrop/WhyEasyDrop'
import HowToStartSection from '../HowToStart/HowToStartSection'
import Statistics from '../Statistics/Statistics'
import ShopCategory from '../ShopCategory/ShopCategory'
import Products from '../Products/Products'
import TrandingProducts from '../TrandingProducts/TrandingProducts'
import ManShoe from '../MenShoe/ManShoe'

function Home() {
    return (
        <div>
            <Review/>
            <HowToStartSection/>
            <WhyEasyDrop/>
            <Statistics/>
            <div className='px-20'>
                <ShopCategory/> 
                <Products/>
                <TrandingProducts/>
                <ManShoe/>
            </div>
        </div>
    )
}

export default Home

