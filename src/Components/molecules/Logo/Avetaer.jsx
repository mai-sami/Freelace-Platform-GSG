import React from "react";
import logo from "../../../assets/logo.jpg";
import { Image } from "./style";

function Avetaer({width,height}) {
  return (
    <>
      <Image width={width} height={height} src={logo} alt="logo" />
    </>
  );
}

export default Avetaer;
