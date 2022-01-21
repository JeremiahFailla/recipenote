import * as Styled from "./LoginContentStyle";
import { useRef } from "react";
import { login } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUser = (user) => {
    dispatch({ type: "setUser", user: user });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(user.user.displayName);
      setUser(user.user);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Styled.Card>
      <Styled.Title>Login</Styled.Title>
      <form style={{ width: "100%" }} onSubmit={formSubmitHandler}>
        <Styled.InputContainer>
          <Styled.Label htmlFor="email">Email:</Styled.Label>
          <Styled.Input
            type="email"
            name="email"
            placeholder="Email"
            ref={emailRef}
          />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label htmlFor="password">Password:</Styled.Label>
          <Styled.Input
            type="password"
            placeholder="*********"
            name="password"
            ref={passwordRef}
          />
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
