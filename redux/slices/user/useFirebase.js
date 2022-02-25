import axios from "axios";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signIn,
  signOutCurrentUser,
  loggedInUserData,
  registerFailed,
} from "./userSlice";

const useFirebase = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const router = useRouter();

  const auth = getAuth();

  const signupWithEmailAndPassword = (
    username,
    email,
    password,
    photoURL,
    userInfo
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoURL,
        });

        saveData(userInfo);
      })
      .catch((err) => {
        dispatch(registerFailed(err.message));
      });
  };

  // sign in
  const logInWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        dispatch(signIn(result.user));
        router.push("/");
      })
      .catch((err) => {
        dispatch(registerFailed(err.message));
      });
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(signOutCurrentUser());
      })
      .catch((err) => {
        dispatch(registerFailed(err.message));
      });
  };

  useEffect(() => {
    fetch(
      `https://sheltered-journey-99057.herokuapp.com/users/${currentUser?.email}`
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(loggedInUserData(data));
      });
  }, [currentUser?.email]);

  // data save to database
  const saveData = async (data) => {
    try {
      axios
        .post("https://sheltered-journey-99057.herokuapp.com/users", data)
        .then(function (response) {
          console.log(response);
          router.push("/dashboard/profile");
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (err) {
      console.error(err);
    }
  };
  //   // observer function
  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (user) {
  //         dispatch(initialUserData({ user }));
  //       } else {
  //         dispatch(initialUserData(null));
  //       }
  //     });
  //     return () => unsubscribe;
  //   }, []);
  //[currentUser?.email]);
  return { logInWithEmailAndPassword, signupWithEmailAndPassword, logOut };
};

export default useFirebase;
