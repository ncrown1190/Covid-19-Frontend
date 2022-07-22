import { ReactNode, useEffect, useState } from "react";
import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import AuthContext from "./AuthContext";

function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Remember useEffect makes sure this code only runs once.
  useEffect(() => {
    // The return here passes the unsubscribe function back to useEffect which will call it when this component is unmounted.
    return auth.onAuthStateChanged((newUser) => {
      setUser(newUser);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
export default AuthContextProvider;
