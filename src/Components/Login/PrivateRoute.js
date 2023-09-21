import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { UserContext } from "../../App";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(UserContext);

//   const isLoggedIn = () => {
//     const token = sessionStorage.getItem("token");
//     if (!token) {
//       return false;
//     }

//     const decodedToken = jwtDecode(token);
//     const currentTime = new Date().getTime() / 1000;
//     return decodedToken.exp > currentTime;
//   };

  const route = useRoutes([
    {
      ...rest,
      element:
        loggedInUser.email ? (
          children
        ) : (
          <Navigate to="/login" />
        ),
    },
  ]);

  return route;
};

export default PrivateRoute;
