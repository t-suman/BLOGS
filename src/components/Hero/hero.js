import React from "react";
import Card from "../UI/Card/card";
import Logo from "../Logo/logo";
import NavBar from "../NavBar/navBar";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div>
      <Card>
        <div style={{ padding: "50px 0" }}>
          <Logo />
        </div>
        <NavBar />
      </Card>
    </div>
  );
};

export default Hero;
