import React, {useEffect, useState} from "react";

const EffectOne = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <h4>Useeffect counter: {counter}</h4>
      <button
        className="bg-green-400"
        onClick={() => setCounter((value) => value + 1)}
      >
        +
      </button>
      <User />
      <User2 count={counter > 5} />
    </div>
  );
};

export default EffectOne;

const User = () => {
  console.log("User Component will render every time the parent state changes");
  return (
    <div>
      <h2>User Component without use effect</h2>
    </div>
  );
};

const User2 = ({count}) => {
  useEffect(() => {
    console.log("User 2 compinent will be rendered once");
  }, [count]);
  return <h1>User 2</h1>;
};
