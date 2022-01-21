import * as Styled from "./JoinNowContentStyles";
import * as MoreStyled from "./../loginContent/LoginContentStyle";
import { useRef } from "react";
import { signUp, updateDisplayName } from "./../../firebase/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const JoinNowContent = () => {
  const displayNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setUser = (user) => {
    dispatch({ type: "setUser", user: user });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await signUp(
        emailRef.current.value,
        passwordRef.current.value
      );

      // user.user.displayName = displayNameRef.current.value;
      await updateDisplayName(displayNameRef.current.value);
      setUser(user.user);
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MoreStyled.Card>
      <MoreStyled.Title>Join Now</MoreStyled.Title>
      <Styled.SeeBonuses>
        To See Details About Membership Visit the{" "}
        <Styled.Links to="/about">About</Styled.Links> Page
      </Styled.SeeBonuses>
      <form onSubmit={formSubmitHandler} style={{ width: "100%" }}>
        <MoreStyled.InputContainer>
          <MoreStyled.Label htmlFor="username">Username</MoreStyled.Label>
          <MoreStyled.Input
            type="username"
            placeholder="Username"
            name="text"
            value={displayNameRef.current.value}
            ref={displayNameRef}
          />
        </MoreStyled.InputContainer>
        <MoreStyled.InputContainer>
          <MoreStyled.Label htmlFor="email">Email</MoreStyled.Label>
          <MoreStyled.Input
            type="email"
            placeholder="Email"
            name="email"
            value={emailRef.current.value}
            ref={emailRef}
          />
        </MoreStyled.InputContainer>
        <MoreStyled.InputContainer style={{ marginBottom: "1.5rem" }}>
          <MoreStyled.Label htmlFor="password">Password</MoreStyled.Label>
          <MoreStyled.Input
            type="password"
            placeholder="*******"
            name="password"
            value={passwordRef.current.value}
            ref={passwordRef}
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
