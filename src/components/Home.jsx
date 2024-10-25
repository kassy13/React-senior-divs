// import React from "react";
import {RiHomeFill, RiMailLine} from "react-icons/ri";
import {PintGlass} from "@phosphor-icons/react/dist/ssr";
import field from "../assets/images/field.jpg";

const Home = () => {
  const name = "john";
  console.log(name);
  return (
    // <section className="">
    //   <div>
    //     <p>This is rendered from the home component</p>
    //   </div>
    //   <div>
    //     <h1>Hello world {name}</h1>
    //     {/* <label htmlFor=""></label> */}
    //   </div>
    //   <img src="" alt="" />
    // </section>
    // <React.Fragment>
    //   <p>Child 1</p>
    //   <p>Child 2</p>
    // </React.Fragment>
    <>
      <p>Child 1</p>
      <p>Child 2</p>
      <PintGlass />
      <RiHomeFill />
      <RiMailLine size={32} color="green" />
      {/* <img src={field} alt="" /> */}
      <img src={field} alt="" />
      <img
        src={
          "https://images.pexels.com/photos/27790618/pexels-photo-27790618/free-photo-of-man-in-a-raincoat-climbing-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
        alt=""
      />
    </>
  );
};

export default Home;
