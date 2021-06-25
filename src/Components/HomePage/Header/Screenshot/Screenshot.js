import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel_1 from "./../../../../Image/carousel1.png"
import Carousel_2 from "./../../../../Image/carousel2.png"
import Carousel_3 from "./../../../../Image/carousel3.png"
import Carousel_4 from "./../../../../Image/carousel4.png"
import Carousel_5 from "./../../../../Image/carousel5.png"
import Carousel_6 from "./../../../../Image/carousel6.png"
import Carousel_7 from "./../../../../Image/carousel7.png"
import Carousel_8 from "./../../../../Image/carousel8.png"
const Screenshot = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center">APP SCREENSHOT</h1>
      <h5 className="text-center ">Check the screenshots below to get an idea of the app flaw and the features.

</h5>
<div className="container p-5">
<OwlCarousel className='owl-theme' stageClass="owl-stage" items={4} loop margin={10} nav>
    <div class='item'>
       <img className="img-fluid" src={Carousel_1} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_2} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_3} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_4} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_5} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_6} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_7} alt="" srcset="" />
    </div>
    <div class='item'>
    <img className="img-fluid" src={Carousel_8} alt="" srcset="" />
    </div>
    
    
</OwlCarousel>;
</div>
    </div>
  );
};

export default Screenshot;
