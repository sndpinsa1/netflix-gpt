import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      if (loggedInUser) {
        console.log(loggedInUser);
        dispatch(
          addUser({
            email: loggedInUser.email,
            displayName: loggedInUser.displayName,
            photoURL: loggedInUser.photoURL,
            uid: loggedInUser.uid,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex justify-between px-20 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      <div>
        {user && (
          <div>
            <button onClick={logout} className="font-bold text-white">
              {user.displayName + ", "} LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
