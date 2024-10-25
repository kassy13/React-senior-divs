import React, {useState} from "react";

const StateTwo = () => {
  const [myString, setMyString] = useState("Initial Value");
  const handleChange = () => {
    setMyString("New Value");
  };
  return (
    <div>
      <h2>String Value:{myString} </h2>
      <button onClick={handleChange} className="bg-red-500">
        Update
      </button>
    </div>
  );
};

export default StateTwo;

const ExampleTwo = () => {
  const [name, setName] = useState("");
  return (
    <>
      <hr />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" border border-black"
      />
      <p>name:{name}</p>
    </>
  );
};
export {ExampleTwo};
