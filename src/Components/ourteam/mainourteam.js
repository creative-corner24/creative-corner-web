import React, { Component } from "react";
import OurTeamProp from "../standersection/ourteamprop";
import ourimg from "./images/membr1.png"
import ourimg2 from "./images/membr2.png"

function MainOurTeam() {
  return (
    <>
      <div className="container py-3">
        <h2 className="text-center py-3">Team Introduction</h2>
        <p>
          Our team work closely with each of our clients to understand their
          unique needs and objectives, developing marketing solutions that
          deliver real results. Our commitment to excellence and customer
          satisfaction is evident in everything we do, from the quality of our
          work to the integrity of our relationships.
        </p>
      </div>
      <div className="row mx-5 mb-5">
        <div className="col-md-4 my-4">
<div><OurTeamProp
img={ourimg2}
text="CEO"
text2="mostafa"
/></div>
        </div>
        <div className="col-md-4 my-4"><div><OurTeamProp
img={ourimg2}
text="General Manager "
text2="Mahmoud "
/></div></div>
        <div className="col-md-4 my-4"><div><OurTeamProp
img={ourimg2}
text="account manager "
text2="Mohand"
/></div></div>
      </div>
      <div className="row mx-5 my-5">
        <div className="col-md-4 my-4">
        <div><OurTeamProp
img={ourimg}
text="position"
text2="member name"
/></div>
        </div>
        <div className="col-md-4 my-4"><div><OurTeamProp
img={ourimg}
text="position"
text2="member name"
/></div></div>
        <div className="col-md-4 my-4"><div><OurTeamProp
img={ourimg2}
text="position"
text2="member name"
/></div></div>
      </div>
    </>
  );
}

export default MainOurTeam;
