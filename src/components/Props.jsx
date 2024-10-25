// import React from "react";
import {PropTypes} from "prop-types";

// const Props = (prop) => {
//   console.log(prop);
//   return (
//     <div>
//       <p>Title: {prop.title}</p>
//       <p>text: {prop.text}</p>
//       <a href="">{prop.link}</a>
//       <button>Learn more</button>
//     </div>
//   );
// };

const Props = ({title = "hello", text = "hi", link, age = 18, imgName}) => {
  // console.log(prop);
  return (
    <div>
      <p>Title: {title}</p>
      <p>text: {text}</p>
      <a href="">{link}</a>
      <p>{age}</p>

      <img src={imgName} alt="" />
      <button>Learn more</button>
    </div>
  );
};

Props.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  age: PropTypes.number,
};
export default Props;
