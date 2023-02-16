import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import "./style.css";

import { login } from "../../features/userSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    console.log("hello");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // (userCredential.user.displayName = name),
        //   (userCredential.user.photoURL = profilePic);
        console.log(userCredential);
        return userCredential;
      })
      .then((userCredential) => {
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png"
        alt="linkedIn"
      />
      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Full Name"
          required
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          required
        />

        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Profile Pic Url (Optional)"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />

        <button>Sign In</button>
        <p>
          Not a member?{" "}
          <span onClick={register} className="login-register">
            Register Now
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
