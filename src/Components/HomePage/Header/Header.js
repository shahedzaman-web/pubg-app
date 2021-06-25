import React from "react";
import "./Header.css";
import Phone from "./../../../Image/phone_header.png";
import Typist from "react-typist";

const Header = () => {
  return (
    <header className="container-fluid mt-1">
      <div className="row header-bg align-items-center">
        <div className="col-md-6 col-sm-12 ps-5 my-auto">
          <Typist className="text-white header-text">
            It’s all about Gaming means BATTLEMANIA App
          </Typist>
          <h4 className="text-white">
            Win real cash via playing MOBILE turnaments for free. Get it now!
          </h4>
          <button className="download-btn">Download Now!</button>
        </div>
        <div className="col-md-6 col-sm-12 text-center py-5 container text-center mt-5">
          <img src={Phone} alt="" className="img-fluid phone-img" />
        </div>
      </div>
      
    </header>
  );
};

export default Header;
