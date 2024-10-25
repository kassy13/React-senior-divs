// import React from "react";

// const COnditional = () => {
//   const isTrue = true;
//   {
//     return isTrue ? <h1>Logout</h1> : <h1>Login</h1>;
//   }
// };

// export default COnditional;

import React from "react";

const COnditional = ({isValid}) => {
  return isValid ? "true" : "false";
};

export default COnditional;
