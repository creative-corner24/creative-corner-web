import React, { Component } from "react";
import Headerslider from '../../Components/header'
import './home.css'
import MainHomeSection from "../../Components/home/firstsection";
import Primarysection from "../../Components/home/secondsection";
import Slidersection from "../../Components/home/slidersection";
import MainFooter from "../../Components/Footer";
function Home() {
  return (
      <>
<div><Headerslider/></div>
<div><MainHomeSection/></div>
<div><Primarysection/></div>
<div><Slidersection/></div>
<div><MainFooter/></div>
    </>
  );
}

export default Home;