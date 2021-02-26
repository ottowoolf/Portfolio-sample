import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='main-info'>
        <h1>Web development and Design</h1>
        <Typed
          className='typed-text'
          strings={[
            "Web development",
            "E-commerce",
            "Mobile Apps",
            "Database Design",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href='#offer' className='btn-main-offer'>
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;
