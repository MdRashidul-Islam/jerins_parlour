import { useEffect, useState } from "react";
import { initAuth } from "../pages/Authentication/Firebase/firebase.init";

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

initAuth();
const useFirebase = () => {
  const [user, setUser] = useState({});

  const auth = getAuth();

  //----------------register user start------------------//
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //---------register User end-----------------//

  //-------------login with email password start--------------//
  const signWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //-------------login with email password end--------------//

  //-----------------sign out start------------------//
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  //-----------------sign out end------------------//

  //---------------Auth state start---------------//
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unSubscribe;
  }, []);
  //---------------Auth state start---------------//

  return {
    user,
    registerUser,
    logOut,
    signWithEmail,
  };
};
export default useFirebase;
