import React, {Children, useState} from "react";
import UserContext from "./UserContext";

const UserContextprovider = ({children}) => {
  const [user, setUser] = useState();
  //   const [user2, setUser2] = useState();
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextprovider;
