import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Home.css";
import UserInformation from "./UserInformation";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState(false);
  return (
    <div className="signin-container">
      <div className="signin-btn">
        {!user ? (
          <button
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Sign In with Google
          </button>
        ) : (
          <button
            onClick={() => {
              signOut();
            }}
          >
            Sign Out
          </button>
        )}
        {user ? (
          <div>
            <h2>welcome, {user.displayName?.toLowerCase()}</h2>
            <UserInformation />
          </div>
        ) : (
          <h2>{error && <span>Wrong email or password</span>}</h2>
        )}
      </div>
    </div>
  );
}
