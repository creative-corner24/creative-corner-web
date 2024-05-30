import React from "react";
import bgim from "./images/Frame 190.png";
import iconim1 from "./images/1icon.png";
import iconim4 from "./images/4icon.png";
import iconim2 from "./images/icon1.png";
import iconim3 from "./images/icon3.png";
import CardServices from "../standersection/propservices";
import { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import AnomationServices from "../standersection/propservices2";
import elips from "./images/Ellipse 10.png";
import elips1 from "./images/Ellipse 10-1.png";
import elips2 from "./images/Ellipse 10-2.png";
import elips3 from "./images/Ellipse 10-3.png";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdOutlineVoicemail } from "react-icons/md";
import { IoGitMergeSharp } from "react-icons/io5";
import { TbInputSearch } from "react-icons/tb";
import { SiAffinitydesigner } from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbDeviceIpadHorizontalCode } from "react-icons/tb";
import { TbLetterCaseUpper } from "react-icons/tb";
import { PiStrategy } from "react-icons/pi";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdOutlinePermMedia } from "react-icons/md";
import { RiNotificationBadgeLine } from "react-icons/ri";
import { MdOutlineAnalytics } from "react-icons/md";
import AnomationServices2 from "../standersection/secondpropservices";
import AnomationServices3 from "../standersection/thirdpropservices";
import AnomationServices4 from "../standersection/fourthpropservices";

function OurServices() {
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionChange = (sectionNumber) => {
    setActiveSection(sectionNumber);
  };

  return (
    <>
      <div className="">
        <h1 className=" text-center my-5 fontOtomanopee ">
          Our services include
        </h1>
        <Row className="rowofservicescards">
          <div className="col-md-3 ourservicescard">
            <Button
              onClick={() => handleSectionChange(1)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <CardServices
                imgicon={iconim2}
                text="Digital Marketing
 Strategy"
              />
            </Button>
          </div>
          <div className="col-md-3  ourservicescard ">
            <Button
              onClick={() => handleSectionChange(2)}
              variant={activeSection === 2 ? "red" : "red"}
            >
              {" "}
              <CardServices
                imgicon={iconim3}
                text="Social Media 
                Marketing"
              />
            </Button>
          </div>

          <div className="col-md-3 ourservicescard  ">
            <Button
              onClick={() => handleSectionChange(3)}
              variant={activeSection === 3 ? "red" : "red"}
            >
              {" "}
              <CardServices
                imgicon={iconim4}
                text="Mobile and Web
                Development"
              />
            </Button>
          </div>
          <div className="col-md-3 ourservicescard ">
            <Button
              onClick={() => handleSectionChange(4)}
              variant={activeSection === 4 ? "red" : "red"}
            >
              {" "}
              <CardServices
                imgicon={iconim1}
                text="Creative Production Servcies"
              />
            </Button>
          </div>
        </Row>

        <Row>
          <div className="col">
            {activeSection === 1 && (
              <div className="">
                <div>
                  <AnomationServices
                    text1="Digital  marketing  refers to the  use of  digital  channels,  platforms,  and technologies to  promote products,  services, or brands to reach and engage with  target audiences. It encompasses various online marketing strategies and tactics aimed at connecting with customers where they spend much of their time on the internet."
                    img={elips}
                    text="The use of digital technologies"
                    iconname1={<AiOutlineFileSearch />}
                    lifrtex1="Market Research"
                    lisectex1="provides essential insights on your target audience, competition, and industry trends, guiding your strategic decisions for business success."
                    iconname2={<MdAppRegistration />}
                    lifrtex2="	Mobile marketing"
                    lisectex2="to reach your audience effectively, leveraging innovative strategies to drive engagement and grow your brand presence on handheld devices."
                    iconname3={<MdOutlineBrandingWatermark />}
                    lifrtex3="Branding"
                    lisectex3="crafts your unique identity, conveying your essence to the world with creativity and impact."
                    iconname4={<MdOutlineVoicemail />}
                    lifrtex4="Email Marketing"
                    lisectex4="delivering tailored messages that drive conversions and foster lasting relationships with your customers."
                    iconname5={<TbInputSearch />}
                    lifrtex5="SEO/SEM Services"
                    lisectex5="optimizes your online presence, enhancing visibility and driving targeted traffic to your website through strategic techniques, maximizing your digital success."
                   
                  />
                </div>
              </div>
            )}
            {activeSection === 2 && (
              <div className="">
                <div>
                  <AnomationServices2
                    text1="The platforms on which users build social networks and share information to build a company's brand, increase sales, and drive website traffic. In addition to providing companies with away to engage with existing customer and reach new ones."
                    img={elips2}
                    text="The use of social media"
                    iconname1={<PiStrategy />}
                    lifrtex1="Content Strategy"
                    lisectex1="crafts plans to boost your brand with captivating content. We ensure consistency across platforms to captivate your audience and drive connections that matter."
                    iconname2={<BsPersonFillCheck />}
                    lifrtex2="Buyer Persona"
                    lisectex2="delves deep into understanding your target audience, crafting detailed profiles that guide your marketing efforts with precision."
                    iconname3={<MdOutlinePermMedia />}
                    lifrtex3="Media Buying"
                    lisectex3="strategically purchases advertising space across various channels to maximize your brand's exposure and reach your target audience effectively."
                    iconname4={<RiNotificationBadgeLine />}
                    lifrtex4="Moderation"
                    lisectex4=": our moderation service fosters a safe and positive online space for your community or social media platform by enforcing guidelines and swiftly addressing issues."
                    iconname5={<MdOutlineAnalytics />}
                    lifrtex5="Analysis	& Reports"
                    lisectex5="tracks and evaluates our work's impact on your brand's growth, providing valuable insights to drive continuous improvement and success."
                  />
                </div>
              </div>
            )}
            {activeSection === 3 && (
              <div className="">
                <div>
                  <AnomationServices3
                    text1=" Creative Corner Agency offers comprehensive website Development and mobile app development services. From responsive website design to mobile app development, for unique user experience we create tailored digital solutions to suit your business needs. Our team ensures user-friendly interfaces and optimized performance across devices. Trust us to bring your digital vision to life."
                    img={elips3}
                    text="Comprehensive website development and mobile app"
                    iconname1={<TbDeviceMobileCode />}
                    lifrtex1="Mobile App Development"
                    lisectex1="brings your ideas to life, crafting user-friendly and innovative applications tailored to your specific needs and goals"
                    iconname2={<TbDeviceIpadHorizontalCode />}
                    lifrtex2="	Website Development service "
                    lisectex2="builds tailored and user-friendly websites that reflect your brand identity and engage your audience effectively."
                    iconname3={<TbLetterCaseUpper />}
                    lifrtex3="	Quality Assurance(testing)"
                    lisectex3="ensures that every feature and functionality performs flawlessly across platforms. We rigorously test to deliver a seamless user experience."
                  />
                </div>
              </div>
            )}
            {activeSection === 4 && (
              <div className="">
                <div>
                  <AnomationServices4
                    text1="Step into Creative Corner, where imagination meet expertise in our creative production services. With a keen eye for detail and a passion for storytelling, we bring  your visions to life, whether it's crafting compelling visuals or producing captivate multimedia content. Our dedicated  team of professionals collaborates closely with clients, ensuring every project receives personalized attention and exceeds expectations."
                    img={elips1}
                    text=" Bringing Your Vision to Life"
                    iconname1={<SiAffinitydesigner />}
                    lifrtex1="Graphic Design"
                    lisectex1="brings your vision to life with stunning visuals that captivate and resonate with your audience."
                    iconname2={<MdAnimation />}
                    lifrtex2="Animation & Motion Graphics"
                    lisectex2=" adds dynamic storytelling elements to your brand, leveraging captivating visuals to convey complex concepts, enhance user experience, and drive engagement across various platforms."
                    iconname3={<MdOutlinePhotoCamera />}
                    lifrtex3="Photography"
                    lisectex3=" captures the essence of your brand with stunning imagery that resonates with your audience, showcasing your products, services, or events"
                    iconname4={<CiVideoOn />}
                    lifrtex4="Video/Film Making"
                    lisectex4="creates captivating visual stories that breathe life into your brand, from concept to production, engaging your audience with compelling content."
                  />
                </div>
              </div>
            )}
          </div>
        </Row>
      </div>

      <div className=" container  maindivee">
        <div className="maindivtext">
          <h1 className="mx-4 fontOtomanopee  ">FQA</h1>
        </div>
        <div className="container">
          <div className="row  ">
            <Button
              onClick={() => handleSectionChange(1)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo">
                <div className="col-md-11">
                  <li className="fw-bold Nunito">
                    How long the marketing plan takes to succeed?
                  </li>
                </div>
                <div className="col-md-1">
                  {" "}
                  <button type="button" class="btn betoo  ">
                    +
                  </button>
                </div>
              </div>
            </Button>
            {activeSection === 1 && (
              <div className="">
                <p class="">
                  The time it takes for a marketing plan to succeed varies based
                  on factors like goals, industry, and strategy complexity.
                  Generally, it can range from a few months for short-term
                  campaigns to a year or more for comprehensive strategies.
                </p>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(2)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo">
                <div className="col-md-11">
                  <li className="fw-bold Nunito">
                    {" "}
                    Can social media marketing really help my business?
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>
              </div>
            </Button>
            {activeSection === 2 && (
              <div className="">
                <p class="">
                  The time it takes for a marketing plan to succeed varies based
                  on factors like goals, industry, and strategy complexity.
                  Generally, it can range from a few months for short-term
                  campaigns to a year or more for comprehensive strategies.
                </p>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(3)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row  impoo ">
                <div className="col-md-11">
                  <li className="fw-bold Nunito"  >
                    What are the services suggested for my startup business
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>
              </div>
            </Button>

            {activeSection === 3 && (
              <div className="">
                <div class="">
                  <ul>
                    For your startup business, we recommend:
                    <li> Business strategy development</li>
                    <li>Market research and analysis</li>
                    <li>Brand identity and positioning</li>
                    <li>Website development and digital presence</li>
                    <li>marketing strategies</li>
                    These services are tailored to address your startup's
                    specific needs and support your growth and success.
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(4)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo">
                <div className="col-md-11">
                  <li className="fw-bold Nunito"  >
                    Does your digital agency offer ongoing help with our new
                    site once it's launched?
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>
              </div>
            </Button>
            {activeSection === 4 && (
              <div className="">
                <p class="">
                  Absolutely! At our digital agency, we provide ongoing support
                  for your website post-launch, including technical assistance,
                  content updates, security monitoring, performance
                  optimization, SEO maintenance, and analytics reporting. We're
                  committed to ensuring your website remains effective and
                  secure over time.
                </p>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(5)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo ">
                <div className="col-md-11">
                  <li className="fw-bold Nunito"  >
                    Does your digital agency offer ongoing help with our new
                    site once it's launched?
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>{" "}
              </div>
            </Button>

            {activeSection === 5 && (
              <div className="">
                <p class="">
                  Yes, we offer content creation and image sourcing services for
                  your website. Our team of skilled writers can craft engaging
                  and SEO-friendly content tailored to your brand and target
                  audience. Additionally, we can assist in selecting
                  high-quality images that align with your brand identity and
                  enhance the visual appeal of your website. Whether you need
                  website copy, blog posts, product descriptions, or imagery,
                  we're here to help create compelling content that resonates
                  with your audience and drives results
                </p>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(6)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo ">
                <div className="col-md-11">
                  <li className="fw-bold Nunito"   >
                    Does your digital agency offer ongoing help with our new
                    site once it's launched?
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>
              </div>
            </Button>
            {activeSection === 6 && (
              <div className="">
                <div class="">
                  <ul>
                    For your startup business, we recommend:
                    <li> Expertise and customized solutions.</li>
                    <li>Increased online visibility and lead generation.</li>
                    <li>Data-driven strategies and transparent reporting.</li>
                    <li>Strategic partnerships for sustainable growth."</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="row ">
            <Button
              onClick={() => handleSectionChange(7)}
              variant={activeSection === 1 ? "red" : "red"}
            >
              <div className="row impoo">
                <div className="col-md-11">
                  <li className="fw-bold Nunito"   >
                    Does your digital agency offer ongoing help with our new
                    site once it's launched?
                  </li>
                </div>
                <div className="col-md-1">
                  <button type="button" class="btn betoo">
                    +
                  </button>
                </div>
              </div>
            </Button>
            {activeSection === 7 && (
              <div className="">
                <div class="">
                  <ul>
                    <li> Facebook: Wide reach and community-building.</li>
                    <li>Instagram: Visual content for younger demographics.</li>
                    <li>Twitter: Real-time engagement and updates.</li>
                    <li>
                      LinkedIn: Professional networking and B2B marketing.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default OurServices;
