import React, {useState} from "react";

const StateThree = () => {
  const [isTrue, setIsTrue] = useState(false);
  const toggleState = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div>
      {isTrue ? <h1>I am in class</h1> : <h1>I just Finished class</h1>}
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
};

export default StateThree;
