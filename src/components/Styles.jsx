import React from "react";

const Styles = () => {
  const s = {
    color: "white",
    backgroundColor: "crimson",
    height: "100px",
  };
  return (
    <div>
      <h1
        style={{
          color: s.color,
          backgroundColor: s.backgroundColor,
          height: s.height,
        }}
      >
        Inline style
      </h1>
      <h2 style={{color: "red"}}>Hello I'm I&lsquo;m from react</h2>
      <h3 className="external hello">External Styling</h3>
    </div>
  );
};

export default Styles;
