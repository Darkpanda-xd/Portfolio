import React from "react";
import "./home.css"


const hbg2 = "../../Images/h-bg2.jpg"
const hbg = "../../Images/h-bg.jpg"
const hRightImg = "../../Images/Frame 27.jpg"
const hRightImg2 = "../../Images/Frame 29.png"
const myImg = "../../Images/MY-IMG.jpg"
const myImg2 = "../../Images/Frame 28.png";
const Home = () => {
  return (
    <div className="h-wrapper">
      <div className="h-left">
        <div className="h-intro">
          <span>
            Need a developer <br/>
            <span >to code </span>
            your websites  <br/>
            from scratch<span>.</span>
          </span>
          <span>
          I am Partha Sarathi, an UI Developer, based in India. I am <br/> experienced in developing responsive UI. 
          </span>

        </div>
        <button className="btn h-btn">Know More</button>
      </div>
      <div className="h-right">
        <div className="h-right-bg">
            <img src={hbg2} alt="" />
            <img src={hbg} alt="" />
        </div>
        <div className="bg-color">
        </div>
        <div className="h-right-text">
         <img src={hRightImg} alt="" />
        </div>
        <div className="h-right-icon">
            <img src={hRightImg2} alt="" />
        </div>
        <div className="my-img">
            <img src={myImg} alt="" />
        </div>
       <div className="my-name">
        <img src={myImg2} alt="" />
       </div>
       <div className="h-vertical-line"></div>
      </div>
    </div>
  );
};

export default Home;
