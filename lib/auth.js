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
  const [user, setUser] = useState();

  const signInWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        handleUser(response.user);
        Router.push("/");
      });
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Router.push("/");
        handleUser(false);
      });
  };

  const handleUser = async (fbUser) => {
    if (fbUser) {
      const user = await formatUser(fbUser);
      setUser(user);
    } else {
      setUser(false);
    }
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signOut,
  };
};

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token: token,
  };
};
