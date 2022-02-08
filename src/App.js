import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";

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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const password = sessionStorage.getItem("up");
        const reviews = JSON.parse(sessionStorage.getItem("reviews"));
        const favorites = JSON.parse(sessionStorage.getItem("favorites"));

        dispatch({ type: "setUserPassword", password: password });
        dispatch({ type: "setUser", user: user, reviews: reviews });
        dispatch({ type: "setFavorites", favorites: favorites });
      } else {
        dispatch({ type: "setLogout" });
      }
    });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes/:search" element={<Recipes />} />
        <Route path="/recipes/:search/:id" element={<Recipes />} />
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
