import React from 'react'

import Specials from '../sections/Specials'
import Promotions from '../sections/Promotions.jsx'
import HeroPage from '../sections/Herosec.jsx'
import HeroSlider from '../sections/Hero.jsx'
import Reservation from "../sections/Reservation.jsx";



export default function Home(){


return (
<div>
 

 <HeroSlider />

  <Reservation />

  <HeroPage />
<div className="relative">

  {/* FIXED BACKGROUND — yeh kabhi nahi hilega */}
  <div
    className="fixed inset-0 bg-[url('/bg2.jpg')] bg-cover bg-center -z-10"
  ></div>

  {/* Pehla Section (Hero ya Page Section) */}
  <section className="min-h-[500px] flex items-center justify-center text-white">
    
  </section>

  {/* Tumhara sliding overlap Page section */}


  {/* Specials Section */}
  <Specials />

</div>

<Promotions />
</div>
)
}



