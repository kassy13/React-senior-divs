import React, {useState} from "react";
import {RiCloseLine} from "react-icons/ri";

const Sidebar = () => {
  const [open, setIsOpen] = useState(false);
  const toggle = () => {
    console.log("clicked");
    setIsOpen(!open);
  };
  const sidebar = {
    width: "350px",
    height: "100vh",
    position: "fixed",
    zIndex: "99",
    top: "0",
    right: "-100%",
    backgroundColor: "blue",
    color: "white",
    transition: "0.5s all",
  };
  const sidebarOpen = {
    width: "350px",
    height: "100vh",
    position: "fixed",
    zIndex: "99",
    top: "0",
    right: "0",
    backgroundColor: "blue",
    color: "white",
    transition: "0.5s all",
  };
  return (
    <>
      <section style={open ? sidebarOpen : sidebar}>
        <h1>Sidebar</h1>
        <span>
          <RiCloseLine />
        </span>
      </section>
      <button onClick={toggle}>
        {open ? "close sidebar" : "open sidebar"}
      </button>
    </>
  );
};

export default Sidebar;
