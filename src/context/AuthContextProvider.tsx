import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";
import { getUserByUid } from "../services/userService";
import Profile from "../models/Profile";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
      if (newUser) {
        getUserByUid(newUser.uid).then((res) => {
          if (res) {
            setProfile(res);
          }
        });
      }
    });
  }, []);

  //Remember useEffect makes sure this code only runs once.
  // useEffect(() => {
  //   // The return here passes the unsubscribe function back to useEffect which will call it when this component is unmounted.
  //   return auth.onAuthStateChanged((newUser) => {
  //     setUser(newUser);
  //   });
  // }, []);
  return (
    <AuthContext.Provider value={{ user, profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextProvider;
