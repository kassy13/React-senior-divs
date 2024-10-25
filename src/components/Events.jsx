import React from "react";

const Events = () => {
  const clickFunction = function (e) {
    console.log("clicked", e);
    e.preventDefault();
  };
  const handleSum = (a, b) => {
    alert(a + b);
  };
  return (
    <div>
      <button type="submit" onClick={clickFunction}>
        click this button
      </button>
      <button onClick={() =>handleSum(3,5)}>second button</button>
    </div>
  );
};

export default Events;
