import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

function Slidersection() {
  return (
    // <>
    // <div className="">
    //     <div id="carouselExampleIndicators" className="carousel slide w-100 h-100 d-flex flex-row justify-content-center align-items-center">
    //         <div className="carousel-indicators">
    //             <div className="py-1 px-1 rounded-5" style="background-color: rgba(0, 0, 0, 0.473) ;">
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" >
    //                 </button>
      
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" class="">
    //                 </button>
      
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" class="">
    //                 </button>
      
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" class="">
    //                 </button>
      
    //                 <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" class="">
    //               </button>
    //               </div>
    //             </div>

    //         <div class="container my-5  w-100 h-100">
    //             <div class="position-relative p-5 text-center bg-body rounded-5 w-100 h-100">
    //             <div class="carousel-inner w-100 h-100">

    //             <div class="carousel-item active w-100 h-100">
    //                 <div  class="w-auto h-100 text-light news card d-flex flex-row justify-content-center align-items-end" style="background-image: url('https://user-images.githubusercontent.com/78242022/284228206-d0ccce71-e05d-44e8-9e68-6c06502b9098.png');">
    //                 <div class="card-body">
    //                     <p>
    //                         <img src="https://user-images.githubusercontent.com/78242022/284223694-117eedda-887b-4e4e-b962-972a23bbe885.jpeg" alt=""/>
    //                         <span>The Mainichi</span>
    //                     </p>
    //                     <h1 class="headlines">
    //                         <a href="https://www.msn.com/en-xl/lifestyle/shopping/mushroom-shaped-earbuds-based-on-popular-japanese-kinoko-no-yama-snacks-to-go-on-sale/ar-AA1k8r98?ocid=msedgdhp&pc=U531&cvid=029498f338fe4366b71cea0c21a3a9a2&ei=219">Mushroom-shaped earbuds based on popular Japanese 'Kinoko no Yama' snacks to go on sale</a>
    //                     </h1>
                        
    //                 </div>
    //                 </div>
    //             </div>

    //             <div class="carousel-item w-100 h-100">
    //                 <div  class="w-auto h-100 text-light news card d-flex flex-row justify-content-center align-items-end" style="background-image: url('https://user-images.githubusercontent.com/78242022/284245454-93d67ebf-f4d9-4e09-9b64-024fba27fcbd.jpeg');">
    //                 <div class="card-body">

    //                     <p>
    //                         <img src="https://user-images.githubusercontent.com/78242022/284245690-bf6d358c-f383-44ad-b2a6-b0cbe02af22d.jpeg" alt=""/>
    //                         <span>Business Insider</span>
    //                     </p>
    //                     <h1 class="headlines">
    //                         <a href="https://www.msn.com/en-us/news/technology/elon-musk-says-the-risk-of-advanced-ai-is-so-high-that-the-public-needs-to-know-why-openai-fired-sam-altman/ar-AA1kbZpi?cvid=dd06d8fb2f5144179d660d2744a74f5b&ocid=winp2fptaskbar&ei=3">Elon Musk says the risk of advanced AI is so high that the public needs to know why OpenAI fired Sam Altman</a>
    //                     </h1>
                        
    //                 </div>
    //                 </div>
    //             </div>

    //             <div class="carousel-item w-100 h-100">
    //                 <div  class="w-auto h-100 text-light news card d-flex flex-row justify-content-center align-items-end" style="background-image: url('https://user-images.githubusercontent.com/78242022/284249242-d493c3c0-1861-4bf5-b84e-0bacecdf440f.jpg');">
    //                 <div class="card-body">

    //                     <p>
    //                         <img src="https://user-images.githubusercontent.com/78242022/284248279-04cb6fc4-f662-4c1b-a65d-8937cf081838.jpeg" alt=""/>
    //                         <span>Forbes</span>
    //                     </p>
    //                     <h1 class="headlines">
    //                         <a href="https://www.msn.com/en-us/news/world/a-60-year-old-russian-tank-apparently-tried-attacking-the-ukrainian-marines-dnipro-bridgehead-the-tank-didn-t-survive/ar-AA1kcrpI?ocid=winp2fptaskbar&cvid=852c058a60854cd59f21ce6fcac3ec49&ei=372">A 60-Year-Old Russian Tank Apparently Tried Attacking The Ukrainian Marines' Dnipro Bridgehead. The Tank Didn't Survive.</a>
    //                     </h1>
    //                     <div class="icons">
    //                         <span class="icon"><i class="fa-solid fa-thumbs-up"></i>102</span>
    //                         <span class="icon"><i class="fa-solid fa-thumbs-down"></i>4</span>
    //                         <span class="icon"><i class="fa-regular fa-comments"></i>7</span>
    //                         <span class="icon"><i class="fa-solid fa-share-nodes"></i></i>Share</span>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>

    //             <div class="carousel-item w-100 h-100">
    //                 <div  class="w-auto h-100 text-light news card d-flex flex-row justify-content-center align-items-end" style="background-image: url('https://user-images.githubusercontent.com/78242022/284251874-d733bb33-8bd4-455a-9069-16ab6c3c183a.jpeg');">
    //                 <div class="card-body">

    //                     <p>
    //                         <img src="https://user-images.githubusercontent.com/78242022/284251174-0ad480dc-e65e-4db7-af2d-956acb345e4c.jpeg" alt="">
    //                         <span>ESPN</span>
    //                     </p>
    //                     <h1 class="headlines">
    //                         <a href="https://www.msn.com/en-us/sports/fifa-world-cup/latest-brazil-argentina-encounter-presents-a-chance-to-change-history/ar-AA1kcbIy?ocid=winp2fptaskbar&cvid=852c058a60854cd59f21ce6fcac3ec49&ei=378">Latest Brazil-Argentina encounter presents a chance to change history</a>
    //                     </h1>
    //                     <div class="icons">
    //                         <span class="icon"><i class="fa-solid fa-thumbs-up"></i>200</span>
    //                         <span class="icon"><i class="fa-solid fa-thumbs-down"></i>15</span>
    //                         <span class="icon"><i class="fa-regular fa-comments"></i>100</span>
    //                         <span class="icon"><i class="fa-solid fa-share-nodes"></i></i>Share</span>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div><!--End of Carousel-Item 4-->

    //             <div class="carousel-item w-100 h-100">
    //                 <div  class="w-auto h-100 text-light news card d-flex flex-row justify-content-center align-items-end" style="background-image: url('https://user-images.githubusercontent.com/78242022/284253709-9105d331-f47c-4d01-a5fb-e605206b3610.jpg');">
    //                 <div class="card-body">

    //                     <p>
    //                         <img src="https://user-images.githubusercontent.com/78242022/284254048-729225f8-0056-4f53-9a02-e8c8f7e8e468.jpeg" alt="">
    //                         <span>Newsweek</span>
    //                     </p>
    //                     <h1 class="headlines">
    //                         <a href="https://www.msn.com/en-us/weather/topstories/wildfire-from-interstate-crash-spreads-rapidly-over-mountains/ar-AA1kb42t?ocid=winp2fptaskbar&cvid=852c058a60854cd59f21ce6fcac3ec49&ei=379">Mushroom-shaped earbuds based on popular Japanese 'Kinoko no Yama' snacks to go on sale</a>
    //                     </h1>
    //                     <div class="icons">
    //                         <span class="icon"><i class="fa-solid fa-thumbs-up"></i>12</span>
    //                         <span class="icon"><i class="fa-solid fa-thumbs-down"></i>5</span>
    //                         <span class="icon"><i class="fa-regular fa-comments"></i>37</span>
    //                         <span class="icon"><i class="fa-solid fa-share-nodes"></i></i>Share</span>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //             </div>
    //           </div>

    //         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    //             <i class="fa-solid fa-chevron-left text-bg-dark text-light py-2 px-2 rounded"></i>
    //           <span class="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
    //           <span class="visually-hidden">Previous</span>
    //         </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    //             <i className="fa-solid fa-chevron-right text-bg-dark text-light py-2 px-2 rounded"></i>
    //           <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
    //           <span className="visually-hidden">Next</span>
    //         </button>
    //       </div>
    //     </div>
    // </div>
    // </>
<h1>helllo</h1>
  );
}
export default Slidersection;
