import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import sllid from "./images/Rectangle 147.png";
import sllid2 from "./images/Mobile_Presen.jpg";
import slllid from "./images/5aleg.png";
import sllid3 from "./images/Rectangle 152.png";
import sllid4 from "./images/Rectangle 147.png";
import sllid5 from "./images/Rectangle 151.png";
import sllid6 from "./images/Rectangle 150.png";
import slllid1 from "./images/Image-80.png";
import slllid2 from "./images/lina.png"

import Texttestimonal from "./texttestimonal";

function Slidersection() {
  const [swiperRef, setSwiperRef] = useState(null);

  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  
  return (
    <>
      <div>
        <h1 className=" mx-5 my-4 text-start  fontOtomanopee">Our Work</h1>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className=" myswiper"
        >
          <SwiperSlide>
          
            
              <img src={sllid} 
             />
        
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={sllid2} />
            
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={sllid3} />
            
          </SwiperSlide>

          <SwiperSlide>
            
              <img src={sllid4} />
            
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={sllid5} />
            
          </SwiperSlide>
          <SwiperSlide>
            
              <img src={sllid6} />
            
          </SwiperSlide>
        </Swiper>
      </div>

      <div>
        <Texttestimonal />
      </div>
      <div className="bg-light">
      <h1 className="text-center  fontOtomanopee">Clients Reviews</h1>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1.5}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="myswiper"
        >
          <SwiperSlide>
            <div className="sliderdiv">
              <img src={slllid} className="roundimg " />
              <p className=" px-3">
                We engaged Creative Corner for a website development project,
                and we couldn't be more thrilled with the outcome. Their team
                demonstrated exceptional talent and collaboration from start to
                finish. They took our ideas and transformed them into a visually
                stunning website that not only met but exceeded our
                expectations.{" "}
              </p>
              <p className=" text-center pb-4 ">
                {" "}
                <b>Karam S</b>
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="sliderdiv">
              <img src={slllid1} className="roundimg " />
              <p className=" px-3">
               
•	تعاملت مع creative cornerلخدمة تصميم الجرافيك، ولا يمكنني سوى أن أعبر عن إعجابي الشديد بالنتائج. كان فريقهم محترفًا ومبدعًا. نجحوا في تحويل رؤيتي إلى تصميمات جرافيكية مذهلة. ولن أتردد في التعامل معهم مرة أخرى في المستقبل. شكرًا لكم على جهودكم الرائعة والمتفانية في إرضاء العملاء! 

              </p>
              <p className=" text-center pb-4 ">
                {" "}
                <b>لينا.خ</b>
              </p>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="sliderdiv">
              <img src={slllid2} className="roundimg " />
              <p className=" px-3">
              •	تعاملت مع  creative cornerلتطوير تطبيق المحمول، ما كنت أتوقع إنهم بيكونوا بهالمستوى! كانوا متعاونين ومتفهمين لاحتياجاتنا بكل دقة. النتيجة؟ تطبيق محمول يجنن بكل المقاييس!. - محمد ع.
•	 Creative cornerهم الشريك المثالي في خدمات التسويق الرقمي ووسائل التواصل الاجتماعي. كان فريقهم متعاونًا ومبدعًا، واستطاعوا تحقيق نتائج مذهلة خلال وقت قصير وزادت مبيعاتنا بشكل كبير. نحن ممتنون لجهودهم ونتطلع إلى مواصلة التعاون معهم في المستقبل!" 

              </p>
              <p className=" text-center pb-4 ">
                {" "}
                <b>معاذ.ف</b>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sliderdiv">
              <img src={slllid} className="roundimg " />
              <p className=" px-3">
              "Creative Corner truly understands the intricacies of social media marketing. They helped us build a strong online community and drive meaningful conversations around our brand. We're thrilled with the outcomes." 
              </p>
              <p className=" text-center pb-4">
                {" "}
                <b> Shreif A</b>
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Slidersection;
