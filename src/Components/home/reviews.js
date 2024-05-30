

import React from "react";
import slllid1 from "./images/slllid.png";
import SliderComponent from "../slider";

const Reviews = () => {
  const sliderList = [
    {
      img: (
        <div className="sliderdiv">
          <img src={slllid1} className="roundimg " />
          <p className="text-center px-3">
            We engaged Creative Corner for a website development project, and we
            couldn't be more thrilled with the outcome. Their team demonstrated
            exceptional talent and collaboration from start to finish. They took
            our ideas and transformed them into a visually stunning website that
            not only met but exceeded our expectations.{" "}
          </p>
          <p className=" text-center pb-4 ">
            {" "}
            <b>Karam S</b>
          </p>
        </div>
      ),
    },
    {
      img: (
        <div className="sliderdiv">
          <img src={slllid1} className="roundimg " />
          <p className="text-center px-3">
            • تعاملت مع creative cornerلخدمة تصميم الجرافيك، ولا يمكنني سوى أن
            أعبر عن إعجابي الشديد بالنتائج. كان فريقهم محترفًا ومبدعًا. نجحوا في
            تحويل رؤيتي إلى تصميمات جرافيكية مذهلة. ولن أتردد في التعامل معهم
            مرة أخرى في المستقبل. شكرًا لكم على جهودكم الرائعة والمتفانية في
            إرضاء العملاء!
          </p>
          <p className=" text-center pb-4 ">
            {" "}
            <b>لينا.خ</b>
          </p>
        </div>
      ),
    },
    {
      img: (
        <div className="sliderdiv">
          <img src={slllid1} className="roundimg " />
          <p className="text-center px-3">
            • تعاملت مع creative cornerلتطوير تطبيق المحمول، ما كنت أتوقع إنهم
            بيكونوا بهالمستوى! كانوا متعاونين ومتفهمين لاحتياجاتنا بكل دقة.
            النتيجة؟ تطبيق محمول يجنن بكل المقاييس!. - محمد ع. • Creative
            cornerهم الشريك المثالي في خدمات التسويق الرقمي ووسائل التواصل
            الاجتماعي. كان فريقهم متعاونًا ومبدعًا، واستطاعوا تحقيق نتائج مذهلة
            خلال وقت قصير وزادت مبيعاتنا بشكل كبير. نحن ممتنون لجهودهم ونتطلع
            إلى مواصلة التعاون معهم في المستقبل!"
          </p>
          <p className=" text-center pb-4 ">
            {" "}
            <b>معاذ.ف</b>
          </p>
        </div>
      ),
    },
    {
      img: (
        <div className="sliderdiv">
          <img src={slllid1} className="roundimg " />
          <p className=" px-3 text-center">
            "Creative Corner truly understands the intricacies of social media
            marketing. They helped us build a strong online community and drive
            meaningful conversations around our brand. We're thrilled with the
            outcomes."
          </p>
          <p className=" text-center pb-4">
            {" "}
            <b> Shreif A</b>
          </p>{" "}
        </div>
      ),
    },
  ];

  return (
    <div className="contianer">
      <h1 className="text-center  fontOtomanopee pt-3">Clients Reviews</h1>
      <div className=" my-3 ">
        <SliderComponent
          id={"thirdSlider"}
          list={sliderList}
          slidesPerView768={1}
          slidesPerView1024={1}
          spaceBetween1024={30}
        />
      </div>
    </div>
  );
};
export default Reviews;
