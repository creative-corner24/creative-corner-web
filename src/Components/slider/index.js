import React, { useRef, useState, useEffect } from "react";
import { register } from "swiper/element/bundle";

register();

function SliderComponent({ list, slidesPerView768, slidesPerView1024, spaceBetween1024 }) {
  useEffect(() => {
    // swiper element
    const swiperEl = document.querySelector("swiper-container");
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
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiperEl, swiperParams);

    // and now initialize it
    swiperEl.initialize();
  }, []);

  return (
    <swiper-container init="false">
      {list?.length &&
        list?.map((item) => {
          return <swiper-slide>{item.img}</swiper-slide>;
        })}
      ...
    </swiper-container>
  );
}
export default SliderComponent;
