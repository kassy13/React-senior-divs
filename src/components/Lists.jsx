import React from "react";

const Lists = () => {
  const number = [2, 4, 6, 8, 10, 12];
  const userInfo = [
    {
      username: "jay",
      email: "jay@gmail.com",
      location: "india",
    },
    {
      username: "meta",
      email: "meta123@gmail.com",
      location: "USA",
    },
    {
      username: "somtoo",
      email: "Somtoo@gmail.com",
      location: "Nigeria",
    },
  ];
  return (
    <>
      <div>
        {number.map((num, index) => {
          return (
            <ul key={index}>
              <li>{num}</li>
            </ul>
          );
        })}
      </div>
      <div>
        {userInfo.map((user, index) => (
          <ul key={index}>
            <li>Email: {user.email}</li>
            <li>Username: {user.username}</li>
            <li>Location: {user.location}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Lists;
