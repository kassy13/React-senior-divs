import React, {useState} from "react";

const StateOne = () => {
  //   const arr = useState();
  //   console.log(arr);
  const [test, setTest] = useState(0);

  let count = 0;
  const increment = () => {
    count++;
    console.log("count", count);
  };
  const handleIncrement = () => {
    setTest(test + 1);
  };
  return (
    <section className="py-36">
      <div>
        <p>Count : {count}</p>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <h1>First state using usestate {test}</h1>
        <button onClick={handleIncrement}>increment</button>
      </div>
    </section>
  );
};

export default StateOne;
