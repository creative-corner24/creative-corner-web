import React, { useRef, useState, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

function SliderComponent({id, list, slidesPerView768, slidesPerView1024, spaceBetween1024, loop }) {
    console.log('sliderList', list)
  useEffect(() => {
    // swiper element
    const swiperEl = document.getElementById(id);
    // swiper parameters
    const swiperParams = {
      navigation: "true",
      pagination: "true",
      breakpoints: {
        768: {
          slidesPerView: slidesPerView768,
        },
        1024: {
          slidesPerView: slidesPerView1024,
          spaceBetween: spaceBetween1024,
        },
      },
      on: {
        init() {
          // ...
        },
      },
      loop: loop || 'true',
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);

  return (
    <swiper-container init="false" id={id}>
      {list?.length &&
        list?.map((item) => {
          return <swiper-slide>{item.img}</swiper-slide>;
        })}
      ...
    </swiper-container>
  );
}
export default SliderComponent;
