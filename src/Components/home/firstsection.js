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
{/* 
        <div class="row mainnrow">
          <div class="col-md-7 firstcol">
            <div class="row">
              <div class="col-md-5  cardcol1">

                <div class="card cardbackground1">
                  <div class="card-body">
                    <SECONDPART
                      text="Production Services"
                      imgicon={icon}
                      text2="here imagination meet expertise in our creative production services...."
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-5  cardcol2 ">
                <div class="card  cardbackground2  ">
                  <div class="card-body">
                    <SECONDPART
                      text="Digital Marketing
Strategy"
                      imgicon={icon2}
                      text2="Digital marketing refers to the use of digital channels, platform...."
                    />
                  </div>
                </div>
              </div>

              <div class="col-md-5 cardcol3  ">
                <div class="card cardbackground3   ">
                  <div class="card-body">
                  <SECONDPART
                text="Social Media 
                  Marketing"
                imgicon={icon3}
                text2="The platforms on which  build social networks and share informa..."
              />
                  </div>
                </div>
              </div>
              <div class="col-md-5  cardcol4">
                <div class="card  cardbackground4 ">
                  <div class="card-body">
                     <SECONDPART
          
                text="Mobile and Web 
                  Development solutions"
                imgicon={icon4}
                text2="Creative Corner Agency offers comprehensive website Developme... "
              />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 secondcol">

          </div>
          <a
            href="/Services"
            className="btn    mt-3 partbutton "
            role="button"
            aria-pressed="true"
          >
            All Services{" "}
            <i className="bi bi-chevron-right fa-1x text-dark butonic" />
          </a>
        </div> */}
     

      <div className="row mainnrow">
        <div className="col-md-7 ">
          <div className="row  branchrow ">
            <div className="col-md-5 cardbackground1">
              <SECONDPART
                img={thrd}
                text="Production Services"
                imgicon={icon}
                text2="here imagination meet expertise in our creative production services...."
              />
            </div>
            <div className="col-md-5 cardbackground2">
              <SECONDPART
                img={secd}
                text="Digital Marketing
Strategy"
                imgicon={icon2}
                text2="Digital marketing refers to the use of digital channels, platform...."
              />
            </div>
          </div>
          <div className="row mb-3 branchrow">
            <div className="col-md-5 cardbackground3">
              <SECONDPART
                img={secd}
                text="Social Media 
                  Marketing"
                imgicon={icon3}
                text2="The platforms on which  build social networks and share informa..."
              />
            </div>
            <div className="col-md-5 cardbackground4">
              <SECONDPART
                img={frst}
                text="Mobile & Web 
                  Development "
                imgicon={icon4}
                text2="Creative Corner Agency offers comprehensive website Developme... "
              />
            </div>
          </div>
        </div>
        <div className="col-md-5 my-auto  ">
          <h4 className="mt-4">Discover</h4>
          <h1 className="mt-4 ourser  fontOtomanopee  ">Our Services</h1>
          <h4 className="mt-4">include...</h4>
          <p className="mt-4 nino">
            At Creative Corner, we offer a range of services to help businesses
            stand out in the digital world. From captivating designs to
            effective marketing strategies, we have the expertise to bring your
            vision to life.
          </p>
          <a
            href="/Services"
            className="btn    mt-3 partbutton "
            role="button"
            aria-pressed="true"
          >
            All Services{" "}
            <i className="bi bi-chevron-right fa-1x text-dark butonic" />
          </a>
        </div>
      </div>

      {/* <third part > */}
      <div className=" likecard m-5">
        <div className="row rowcard ">
          <div className="position-relative ">
            <img
              src={free}
              className="
           frree
           "
            />
          </div>
          <div className="col-md-7 cardcol pe-4">
            <h4 className="mb-5">
              <i className="bi bi-caret-right-fill trian"></i>IF you want to
              stop wasting time and money on flashy campaigns that look good but
              generate zero sales
            </h4>
            <h4 className="mb-5">
              <i className="bi bi-caret-right-fill trian"></i>IF you want to get
              the most out of your team and budget
            </h4>
            <h4 className="">
              <i className="bi bi-caret-right-fill trian"></i>IF you are serious
              about growing your business
            </h4>
          </div>

          <div className="col-md-5 ">
            <div className=" position-relative top-0 mx-5  cardim ">
              <img className="cardico" src={icon5} />
              <h4 className="cardtex   text-light">
                Schedule a free meeting with our experts now!
              </h4>
              <a
                href="/Services"
                className="btn  ms-4 cardbuttton "
                role="button"
                aria-pressed="true"
              >
                Schedule now <i className="bi bi-chevron-right fa-1x butonic" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHomeSection;
