import * as Styled from "./JoinNowContentStyles";
import * as MoreStyled from "./../loginContent/LoginContentStyle";
import { useRef, useState, useEffect } from "react";
import { signUp, updateDisplayName, auth } from "./../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPersistence, browserSessionPersistence } from "firebase/auth";
import { db } from "../../firebase/firebase";

const JoinNowContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showErrorEmailInput, setShowErrorEmailInput] = useState(false);
  const [showErrorPasswordInput, setShowErrorPasswordInput] = useState(false);
  const [showErrorNameInput, setShowErrorNameInput] = useState(false);
  const displayNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setFirebaseUser = async (user) => {
    try {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such user!");
        // Add a new document in collection "cities"
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          reviews: [],
          favorites: [],
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (showError === true) {
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [showError]);

  const setUser = (user) => {
    dispatch({ type: "setUser", user: user, reviews: [] });
  };

  const setUserPassword = () => {
    dispatch({ type: "setUserPassword", password: passwordRef.current.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (displayNameRef.current.value.length === 0) {
      setShowError(true);
      setShowErrorPasswordInput(false);
      setShowErrorEmailInput(false);
      setShowErrorNameInput(true);
      setErrorMessage("Enter Display Name");
      return;
    }
    try {
      await setPersistence(auth, browserSessionPersistence);
      const user = await signUp(
        emailRef.current.value,
        passwordRef.current.value
      );
      await updateDisplayName(displayNameRef.current.value);
      setFirebaseUser(user.user);
      setUser(user.user);
      setUserPassword();
      const reviews = [];
      sessionStorage.setItem("reviews", JSON.stringify(reviews));
      sessionStorage.setItem("up", passwordRef.current.value);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("email-already-in-use")) {
        setShowError(true);
        setShowErrorPasswordInput(false);
        setShowErrorNameInput(false);
        setShowErrorEmailInput(true);
        setErrorMessage("Email Already Exists");
      }
      if (error.message.includes("invalid-email")) {
        setShowError(true);
        setShowErrorPasswordInput(false);
        setShowErrorNameInput(false);
        setShowErrorEmailInput(true);
        setErrorMessage("Email Invalid");
      }
      if (error.message.includes("wrong-password")) {
        setShowError(true);
        setShowErrorEmailInput(false);
        setShowErrorNameInput(false);
        setShowErrorPasswordInput(true);
        setErrorMessage("Incorrect Password");
      }
    }
  };

  return (
    <MoreStyled.Card>
      <MoreStyled.Title>Join Now</MoreStyled.Title>
      <Styled.SeeBonuses>
        To See Details About Membership Visit the{" "}
        <Styled.Links to="/about">About</Styled.Links> Page
      </Styled.SeeBonuses>
      {showError && (
        <MoreStyled.ErrorMessage>{errorMessage}</MoreStyled.ErrorMessage>
      )}
      <form onSubmit={formSubmitHandler} style={{ width: "100%" }}>
        <MoreStyled.InputContainer>
          <MoreStyled.Label htmlFor="username">Username</MoreStyled.Label>
          <MoreStyled.Input
            type="username"
            placeholder="Username"
            name="text"
            ref={displayNameRef}
            showErrorNameInput={showErrorNameInput}
          />
        </MoreStyled.InputContainer>
        <MoreStyled.InputContainer>
          <MoreStyled.Label htmlFor="email">Email</MoreStyled.Label>
          <MoreStyled.Input
            type="email"
            placeholder="Email"
            name="email"
            ref={emailRef}
            showErrorEmailInput={showErrorEmailInput}
          />
        </MoreStyled.InputContainer>
        <MoreStyled.InputContainer style={{ marginBottom: "1.5rem" }}>
          <MoreStyled.Label htmlFor="password">Password</MoreStyled.Label>
          <MoreStyled.Input
            type="password"
            placeholder="*******"
            name="password"
            ref={passwordRef}
            showErrorPasswordInput={showErrorPasswordInput}
          />
        </MoreStyled.InputContainer>
        <MoreStyled.LoginButton type="submit">Join</MoreStyled.LoginButton>
      </form>
      <MoreStyled.JoinNowContainer>
        <span style={{ fontFamily: "Scada" }}>Already have an account </span>
        <MoreStyled.JoinNow to="/login">Login</MoreStyled.JoinNow>
      </MoreStyled.JoinNowContainer>
    </MoreStyled.Card>
  );
};

export default JoinNowContent;
