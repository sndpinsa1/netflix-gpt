import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { inputValidator } from "../utils/inputValidator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const message = inputValidator(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          }).then(() => {
            dispatch(
              addUser({
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
                photoURL: auth.currentUser.photoURL,
                uid: auth.currentUser.uid,
              })
            );
            navigate("/browse");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch(
            addUser({
              email: user.email,
              displayName: user.displayName,
              photoURL: user.photoURL,
              uid: user.uid,
            })
          );
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col gap-7 p-12 pb-20 absolute w-3/12 mx-auto right-0 left-0 my-36 bg-black bg-opacity-80"
      >
        <h1 className="text-3xl font-bold text-white mb-4">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            ref={name}
            className="p-4 border text-white border-gray-600 bg-gray-700"
            type="text"
            name="name"
            placeholder="Enter Full Name"
          />
        )}
        <input
          className="p-4 text-white border border-gray-600 bg-gray-700"
          type="text"
          ref={email}
          name="email"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 border text-white border-gray-600 bg-gray-700"
          type="password"
          name="password"
          placeholder="password"
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="w-full p-3 text-white font-bold bg-red-700 rounded-sm"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <p
          className="text-white font-bold cursor-pointer"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp
            ? "Already registered? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
