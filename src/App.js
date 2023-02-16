import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Feed } from "./components/Feed";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Login");
        console.log(user.email);
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.name,
            photoUrl: user.profilePic,
          })
        );
      } else {
        console.log("logout");
        dispatch(logout());
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
