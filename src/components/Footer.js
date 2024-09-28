import React from "react";
import WaveSVG from "../assets/WaveSVG.svg";

const Footer = () => {
  return (
    <>
      {" "}
      <img src={WaveSVG} alt="Waves" className="mx-auto mt-0 mb-0" />
      <footer className="bg-gray-800 text-white text-center pb-2">
        © {new Date().getFullYear()} Sapumal Cham. All Rights Reserved.
      </footer>
    </>
  );
};

export default Footer;
