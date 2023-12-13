import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { setGptToggle } from "../store/gptSlice";
import { SUPPORTED_LANGS } from "../utils/constants";
import { setLang } from "../store/appConfigSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const selectedLang = useSelector((state) => state.config.lang);
  const gptToggle = useSelector((state) => state.gpt.gptToggle);
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

  const handleGptToggle = () => {
    dispatch(setGptToggle(!gptToggle));
  };

  const onChangeHandler = (e) => {
    dispatch(setLang(e.target.value));
  };

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
          <div className="flex gap-4">
            {gptToggle && (
              <select value={selectedLang} onChange={onChangeHandler}>
                {SUPPORTED_LANGS.map((lang) => {
                  return (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  );
                })}
              </select>
            )}

            <button
              className="bg-red-700 px-10 py-3 text-white font-bold rounded-lg"
              onClick={handleGptToggle}
            >
              {gptToggle ? "Homepage" : "GPT Search"}
            </button>
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
