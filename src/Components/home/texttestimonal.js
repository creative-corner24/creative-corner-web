import React, { Component } from "react";
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import client1 from "./images/Ellipse 19.png";
import client2 from "./images/Group 17.png";
import client3 from "./images/Group 18.png";
import client4 from "./images/Ellipse 17.png";
import client5 from "./images/Group 15.png";
import client6 from "./images/Ellipse 18.png";


    function Texttestimonal(){

      const [swiperRef, setSwiperRef] = useState(null);

  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
    return (
     <>
            <h1 className="text-center my-5  fontOtomanopee ">Client Testimonials</h1>
            <div className=" my-5 ">
            <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={6}
          centeredSlides={true}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className=" myswiper"
        >
          <SwiperSlide>
          
            
          <img src={client1} 
         />
    
      </SwiperSlide>
      <SwiperSlide>
        
          <img src={client2} />
        
      </SwiperSlide>
      <SwiperSlide>
        
          <img src={client3} />
        
      </SwiperSlide>

      <SwiperSlide>
        
          <img src={client4} />
        
      </SwiperSlide>
      <SwiperSlide>
        
          <img src={client5} />
        
      </SwiperSlide>
      <SwiperSlide>
        
          <img src={client6} />
        
      </SwiperSlide>
    </Swiper>

            </div>
     </>
    );
  }
  export default Texttestimonal;

