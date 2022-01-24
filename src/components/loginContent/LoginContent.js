import * as Styled from "./LoginContentStyle";
import { useRef, useState, useEffect } from "react";
import { login } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showErrorEmailInput, setShowErrorEmailInput] = useState(false);
  const [showErrorPasswordInput, setShowErrorPasswordInput] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (showError === true) {
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [showError]);

  const setUser = (user) => {
    dispatch({ type: "setUser", user: user });
  };

  const setUserPassword = () => {
    dispatch({ type: "setUserPassword", password: passwordRef.current.value });
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      setUser(user.user);
      setUserPassword();
      navigate("/", { replace: true });
    } catch (error) {
      if (error.message.includes("user-not-found")) {
        setShowError(true);
        setShowErrorPasswordInput(false);
        setShowErrorEmailInput(true);
        setErrorMessage("Account With Email Doesn't Exist");
      }
      if (error.message.includes("invalid-email")) {
        setShowError(true);
        setShowErrorPasswordInput(false);
        setShowErrorEmailInput(true);
        setErrorMessage("Email Invalid");
      }
      if (error.message.includes("wrong-password")) {
        setShowError(true);
        setShowErrorEmailInput(false);
        setShowErrorPasswordInput(true);
        setErrorMessage("Incorrect Password");
      }
    }
  };
  return (
    <Styled.Card>
      <Styled.Title>Login</Styled.Title>
      {showError && <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>}
      <form style={{ width: "100%" }} onSubmit={formSubmitHandler}>
        <Styled.InputContainer>
          <Styled.Label htmlFor="email">Email:</Styled.Label>
          <Styled.Input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
            showErrorEmailInput={showErrorEmailInput}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="password">Password:</Styled.Label>
          <Styled.Input
            type={showPassword ? "text" : "password"}
            placeholder="*********"
            name="password"
            ref={passwordRef}
            showErrorPasswordInput={showErrorPasswordInput}
          />
          <Styled.ShowPasswordButton onClick={showPasswordHandler}>
            Show
          </Styled.ShowPasswordButton>
        </Styled.InputContainer>
        <Styled.ForgotPassword to="/login">
          Forgot Password?
        </Styled.ForgotPassword>
        <Styled.LoginButton type="submit">LOGIN</Styled.LoginButton>
      </form>
      <Styled.JoinNowContainer>
        <span style={{ fontFamily: "Scada" }}>Or </span>
        <Styled.JoinNow to="/joinnow">Join Now</Styled.JoinNow>
      </Styled.JoinNowContainer>
    </Styled.Card>
  );
};

export default LoginContent;
