import React, { useState, useContext, useEffect, createContext } from "react";
import Router from "next/router";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProviderAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useProviderAuth = () => {
  const [user, setUser] = useState(null);

  const signInWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        setUser(response.user);
        Router.push("/");
        return response.user;
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Router.push("/");
        setUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  });

  return {
    user,
    signInWithGithub,
    signOut,
  };
};
