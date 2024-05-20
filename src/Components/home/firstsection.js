import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import SECONDPART from "../standersection/homesec";
import frst from "./images/Frame 189.png";
import secd from "./images/Frame 190.png";
import thrd from "./images/Frame 188.png";
import icon from "./images/1icon.png";
import icon2 from "./images/2icon.png";
import icon3 from "./images/3icon.png";
import icon4 from "./images/4icon.png";
import icon5 from "./images/lon.png";
import icoon from "./images/2.png";
import cardim from "./images/card.png";
import free from "./images/Group 6.png";
import Vedisection from "../vediosection";

function MainHomeSection() {
  return (
    <div className="MAINSECTION  ">
      {/* PART1 */}

      <div className="row  justify-content-between   spaceing">
        <div className=" col-md-6  firstcloum ">
          <h2 className="text-start   fontOtomanopee">
            Creative Corner | for Marketing Solutions & Development Services{" "}
          </h2>
          <p className=" text-start  Nunito ">
            At{" "}
            <a href="" className="firstlink">
              Creative Corner
            </a>
            , we specialize in crafting dynamic websites and innovative
            marketing strategies and develop digital solutions, tailored to your
            unique goals and audience. Whether you're a startup looking to make
            a splash or an established brand seeking for elevate you online
            presence and Marketing Growth, at Creative Corner we have the
            expertise and passion to bring your vision to life with expert
            services.{" "}
          </p>
        </div>

        <div className=" col-md-6  secondcloum">
          <img
            src="../../Assets/12.png"
            className="img-thumbnaill "
            alt="hi "
          />
        </div>
      </div>

      <Vedisection />


      {/* SECONDPART-PROPS */}

     

      <div className="row justify-content-between  mainnrow">
        <div className="col-md-6  FIRRS">
          <div className="row  branchrow ">
            <div className="col-6 col-md-5 cardbackground1">
              <SECONDPART
                img={thrd}
                text="Production Services"
                imgicon={icon}
                text2="here imagination meet expertise in our creative production services...."
              />
            </div>
            <div className="col-6 col-md-5 cardbackground2">
              <SECONDPART
                img={secd}
                text="Digital Marketing
Strategy"
                imgicon={icon2}
                text2="Digital marketing refers to the use of digital channels, platform...."
              />
            </div>
          </div>
          <div className="row   mb-3 branchrow">
            <div className="col-6 col-md-5 cardbackground3">
              <SECONDPART
                img={secd}
                text="Social Media 
                  Marketing"
                imgicon={icon3}
                text2="The platforms on which  build social networks and share informa..."
              />
            </div>
            <div className="col-6 col-md-5 cardbackground4">
              <SECONDPART
                img={frst}
                text="Mobile and Web Development "
                imgicon={icon4}
                text2="Creative Corner Agency offers comprehensive website Developme... "
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 my-auto  SCAA ">
          <h3 >Discover
          <h1 className=" ourser  fontOtomanopee  ">Our Services</h1>
          include...</h3>
          <p className="mt-4 nino">
            At Creative Corner, we offer a range of services to help businesses
            stand out in the digital world. From captivating designs to
            effective marketing strategies, we have the expertise to bring your
            vision to life.
          </p>
          <a
            href="/Services"
            className="btn  LARGESIZE  mt-3 partbutton "
            role="button"
            aria-pressed="true"
          >
            All Services{" "}
            <i className="bi bi-chevron-right fa-1x text-dark butonic" />
          </a>
        </div>
        
      </div>
      <a
            href="/Services"
            className="btn  OTHERDEVICE  mt-3 partbutton "
            role="button"
            aria-pressed="true"
          >
            All Services{" "}
            <i className="bi bi-chevron-right fa-1x text-dark butonic" />
          </a>

      {/* <third part > */}


      <div className=" likecard ">
      
        <div className="row rowcard ">
        <div className="position-relative ">
            <img
              src={free}
              className="position-absolute 
           frree
           "
            />
          </div>
          <div className="col-md-7 cardcol ">
            <p className="mb-5 Nunito">
              <i className="bi bi-caret-right-fill trian"></i> IF you want to
              stop wasting time and money on  <br/>&emsp;flashy  campaigns that look good but
              generate zero sales
            </p>
            <p className="mb-5 Nunito">
              <i className="bi bi-caret-right-fill trian"></i>  IF you want to get
              the most out of your team and budget
            </p>
            <p className="Nunito   ">
              <i className="bi bi-caret-right-fill trian"></i>  IF you are serious
              about growing your business
            </p>
          </div>

          <div className="col-md-5 Nunito ">
            <div className=" position-relative top-0  cardim ">
              <img className="cardico" src={icon5} />
              <h4 className="cardtex   text-light">
                Schedule a free meeting <br/> with our experts now!
              </h4>
              <a
                href="/Services"
                className="btn Nunito  cardbuttton "
                role="button"
                aria-pressed="true"
              >
                Schedule now <i className="bi bi-chevron-right fa-1x butonicc" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHomeSection;
