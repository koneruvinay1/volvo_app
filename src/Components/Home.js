import React from 'react'

import Cards from './Cards'
import FeaturesSection from './FeaturesSection'
import GuestReviewSlider from './GuestReviewSlider'
import ImageGallery from './Image'



const Home = () => {
  return (
 <>
<div style={{ marginTop: "100px" }}>
  
 <Cards/>
 <FeaturesSection/>
 <GuestReviewSlider/>
 <ImageGallery/>

 </div>

 </>
  )
}

export default Home