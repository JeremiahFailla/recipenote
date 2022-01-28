import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import React from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import Recipes from "./pages/Recipes";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import JoinNow from "./pages/JoinNow";
import AccountSettings from "./pages/AccountSettings";
import EditAccountSettings from "./pages/EditAccountSettings";

function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const password = sessionStorage.getItem("up");
      dispatch({ type: "setUserPassword", password: password });
      console.log(user);
      dispatch({ type: "setUser", user: user });
    } else {
      dispatch({ type: "setLogout" });
    }
  });

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/joinnow" element={<JoinNow />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route
          path="/accountsettings/editsettings"
          element={<EditAccountSettings />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
}

export default React.memo(App);
