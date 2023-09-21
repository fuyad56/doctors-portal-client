import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import login from "../../images/login.png";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebase.Config";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

firebase.initializeApp(firebaseConfig);

const SignUp = () => {
  const [, setLoggedInUser] = useContext(UserContext);

  // User info
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    password: "",
    success: "",
    error: "",
  });
  setLoggedInUser(user);

  // handle blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    let isFieldValid = true;
    if (name === "email") {
      const re = /^\S+@\S+\.\S+$/;
      isFieldValid = re.test(value);
    }
    if (name === "password") {
      const isPasswordHasNumber = /\d{1}/.test(value);
      const isPasswordLengthValid = value.length >= 6;
      isFieldValid = isPasswordHasNumber && isPasswordLengthValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[name] = value;
      setUser(newUserInfo);
    }
    console.log(name, value, isFieldValid);
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const { email, password } = user;

    if (email && password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          const newUserInfo = { ...user };
          newUserInfo.success = true;
          newUserInfo.error = "";
          setUser(newUserInfo);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
  };

  // Google Sign in
  const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(gProvider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const isLogin = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
          password: "",
          success: true,
          error: "",
        };
        setUser(isLogin);
      })
      .catch((error) => {
        const newUserInfo = { ...user };
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
  };

  return (
    <div className="mx-[100px] my-10">
      <div className="flex justify-between items-center">
        <div className="border shadow-xl rounded-3xl py-[60px] px-20 ml-[100px]">
          <p className="text-4xl text-bold pb-6 text-center">Login</p>
          <form action="" onSubmit={handleSubmit} className="flex flex-col">
            <label className="text-xl my-1 mx-1" htmlFor="name">
              Name
            </label>
            <input
              className="border-b-2 border-gray-600 py-2 px-2 w-[300px]"
              type="text"
              name="name"
              id="name"
              onBlur={handleBlur}
            />

            <label className="text-xl my-1 mx-1" htmlFor="email">
              Email
            </label>
            <input
              className="border-b-2 border-gray-600 py-2 px-2 w-[300px]"
              type="email"
              name="email"
              id="email"
              onBlur={handleBlur}
            />

            <label className="text-xl my-1 mx-1" htmlFor="password">
              Password
            </label>
            <input
              className="border-b-2 border-gray-600 py-2 px-2 w-[300px]"
              type="password"
              name="password"
              id="password"
              onBlur={handleBlur}
            />

            <div className="text-md font-medium py-2 flex items-center justify-between">
              <Link to={"/signup"}>Forget password?</Link>
              <Link to={"/login"}>Sign In</Link>
            </div>
            <br />
            <input
              className="px-6 py-1 border-2 border-gray-600 rounded text-lg font-medium my-2 mx-auto cursor-pointer flex items-center justify-center hover:rounded-full"
              type="submit"
              value="Login"
            />
          </form>
          <div>
            <h5 className="line-though text-center font-medium uppercase py-2">
              Or
            </h5>
            <button
              className="px-6 py-1 border-2 border-gray-600 rounded text-lg font-medium my-2 mx-auto cursor-pointer flex items-center justify-around w-[300px] hover:rounded-full active:scale-[0.99] duration-100"
              onClick={handleGoogleSignIn}
            >
              {" "}
              <FontAwesomeIcon icon={faGoogle} /> Continue with google
            </button>
          </div>
        </div>

        <div>
          <img src={login} alt="" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
