import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOutCurrentUser, loggedInUserData } from "./userSlice";

const useFirebase = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const router = useRouter();

  const auth = getAuth();

  const signupWithEmailAndPassword = (username, email, password, photoURL) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(auth.currentUser, {
          displayName: username,
          photoURL: photoURL,
        });
        router.push("/");
      })
      .catch((err) => {
        const errorMessage = err.message;
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
        console.log(err.message);
      });
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(signOutCurrentUser());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4030/users/${currentUser?.email}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loggedInUserData(data));
      });
  }, [currentUser?.email]);

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
