import React, { Fragment, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Header from "./Components/Home/Header/Header";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Login/SignUp";
import PrivateRoute from "./Components/Login/PrivateRoute";

export const UserContext = createContext();

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Fragment>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/appointment"
              element={loggedInUser.email ? <Appointment /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Fragment>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
