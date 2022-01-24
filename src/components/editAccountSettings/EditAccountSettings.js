import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./EditAccountSettingsStyles";
import { useSelector } from "react-redux";

const EditAccountSettings = () => {
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showDetailedSection, setShowDetailedSection] = useState(false);

  const comparePasswords = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMessage("Password and Re-entered Password Don't Match");
      setShowError(true);
    } else if (
      passwordRef.current.value === confirmPasswordRef.current.value &&
      passwordRef.current.value !== password
    ) {
      setErrorMessage("Entered Password and Account Password Don't Match");
      setShowError(true);
    } else {
      setShowDetailedSection(true);
    }
  };

  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [showError]);

  return (
    <React.Fragment>
      {showDetailedSection && (
        <Styled.Card>
          <Styled.Title>Edit Account Details</Styled.Title>
        </Styled.Card>
      )}
      {!showDetailedSection && (
        <Styled.Card onSubmit={comparePasswords}>
          <Styled.Title>Confirm Password</Styled.Title>
          <Styled.Description>
            To continue onto the Edit Account Details page please enter and
            re-enter your password
          </Styled.Description>
          {showError && (
            <Styled.ErrorMessageContiner>
              <Styled.ErrorMessageBar>{errorMessage}</Styled.ErrorMessageBar>
            </Styled.ErrorMessageContiner>
          )}
          <Styled.InfoContainer>
            <Styled.Label htmlFor="password">Enter Password</Styled.Label>
            <Styled.PasswordInput
              type="password"
              name="password"
              id="password"
              ref={passwordRef}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="confirmpassword">
              Re-enter Password
            </Styled.Label>
            <Styled.PasswordInput
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              ref={confirmPasswordRef}
            />
          </Styled.InfoContainer>
          <Styled.EditButtonContainer>
            <Styled.EditButton>Confirm</Styled.EditButton>
          </Styled.EditButtonContainer>
        </Styled.Card>
      )}
    </React.Fragment>
  );
};

export default EditAccountSettings;
