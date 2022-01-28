import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./EditAccountSettingsStyles";
import { useSelector, useDispatch } from "react-redux";
import ConfirmModal from "../modals/ConfirmModal";
import {
  updateDisplayName,
  updateUserEmail,
  updateUserPassword,
} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const EditAccountSettings = () => {
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [displayName, setDisplayName] = useState(user?.displayName);
  const [email, setEmail] = useState(user?.email);
  const [password1, setPassword] = useState("");
  const [reenteredPassword, setReenteredPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetailedSection, setShowDetailedSection] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const showConfirmModal = (e) => {
    e.preventDefault();
    if (!validatePassword()) return;
    setShowModal(true);
  };

  useEffect(() => {
    if (showError) {
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  }, [showError]);

  const closeModal = (e) => {
    if (e.target.dataset.modal || e.target.dataset.close) {
      setShowModal(false);
    }
  };

  const validatePassword = () => {
    if (password1 !== reenteredPassword) {
      setShowError(true);
      setErrorMessage("Passwords Do Not Match");
      return false;
    }
    if (password1.length < 8) {
      setShowError(true);
      setErrorMessage("New Password Must be at least 8 characters");
      return false;
    }
    return true;
  };

  const changeAccountDetailsHandler = async () => {
    try {
      await updateDisplayName(displayName);
      await updateUserEmail(email);
      await updateUserPassword(password1);
      dispatch({ type: "setUserPassword", password: password1 });
      navigate("/accountsettings", { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <React.Fragment>
      {showModal && (
        <ConfirmModal close={closeModal}>
          <Styled.Title style={{ margin: "2rem" }}>
            Confirm Save Account Details
          </Styled.Title>
          <Styled.EditButtonContainer style={{ margin: "2rem" }}>
            <Styled.ConfirmChangesButton onClick={changeAccountDetailsHandler}>
              Confirm Changes
            </Styled.ConfirmChangesButton>
            <Styled.CancelButton data-close="close">Cancel</Styled.CancelButton>
          </Styled.EditButtonContainer>
        </ConfirmModal>
      )}
      {showDetailedSection && (
        <Styled.Card onSubmit={showConfirmModal}>
          <Styled.Title>Edit Account Details</Styled.Title>
          {showError && (
            <Styled.ErrorMessageContiner>
              <Styled.ErrorMessageBar>{errorMessage}</Styled.ErrorMessageBar>
            </Styled.ErrorMessageContiner>
          )}
          <Styled.InfoContainer>
            <Styled.Label htmlFor="name">Display Name</Styled.Label>
            <Styled.Input
              type="text"
              name="name"
              id="name"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="email">Display Name</Styled.Label>
            <Styled.Input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="password">Password</Styled.Label>
            <Styled.Input
              type="password"
              name="password"
              id="password"
              value={password1}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="password2">Re-enter Password</Styled.Label>
            <Styled.Input
              type="password"
              name="password2"
              id="password2"
              value={reenteredPassword}
              onChange={(e) => {
                setReenteredPassword(e.target.value);
              }}
            />
          </Styled.InfoContainer>
          <Styled.EditButtonContainer>
            <Styled.EditButton>Save</Styled.EditButton>
          </Styled.EditButtonContainer>
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
            <Styled.Input
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
            <Styled.Input
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
