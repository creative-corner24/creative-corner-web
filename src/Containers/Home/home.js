import React, { Component ,useEffect} from "react";
import Headerslider from '../../Components/header'
import './home.css'
import MainHomeSection from "../../Components/home/firstsection";
import Primarysection from "../../Components/home/secondsection";
import Slidersection from "../../Components/home/slidersection";
import MainFooter from "../../Components/Footer";
import PreFooter from "../../Components/PreFooter";
import{scrollToTop} from "../../utils/shared";

function Home() {
  useEffect(() => {
    scrollToTop()
  }, [])
  return (
      <>
<div><Headerslider/></div>
<div><MainHomeSection/></div>
<div><Primarysection/></div>
<div><Slidersection/></div>

<PreFooter/>
<div><MainFooter/></div>

    </>
  );
}

export default Home;