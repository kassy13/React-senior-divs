import React, {useContext} from "react";
import UserContext from "./Hooks/Usecontext/UserContext";

const Profile = () => {
  const {user} = useContext(UserContext);
  console.log("user", user);
  return (
    <div>
      <hr />
      <h1>Profile: Welcome {user?.username}</h1>
    </div>
  );
};

export default Profile;
