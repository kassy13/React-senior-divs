import React, {useEffect, useState} from "react";

const EffectTwo = () => {
  const [result, setResult] = useState([]);

  const handleApiFetch = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const data = await fetch(url);
    console.log(data);
    const results = await data.json();
    console.log(results);
    setResult
    (results);
  };
  useEffect(() => {
    handleApiFetch();
  },[]);
  return (
    <div>
      <h2>Use Effect Two</h2>
      {result.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </div>
  );
};

export default EffectTwo;
