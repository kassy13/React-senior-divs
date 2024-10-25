// import React from "react";
import aboutOne from "../assets/images/about_1.jpg";
import about_2 from "../assets/images/about_2.jpg";
import about_3 from "../assets/images/about_3.jpg";

const Banner = ({text, para, imgName}) => {
  let imageSrc;
  switch (imgName) {
    case "about_1.jpg":
      imageSrc = aboutOne;
      break;
    case "about_2.jpg":
      imageSrc = about_2;
      break;
    case "about_3.jpg":
      imageSrc = about_3;
      break;
    default:
      imageSrc = null;
  }
  return (
    <section>
      <h1>{text}</h1>
      <p>{para}</p>
      {imageSrc && <img src={imageSrc} alt="image" />}
    </section>
  );
};

export default Banner;
