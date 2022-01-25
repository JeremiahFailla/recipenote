import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./EditAccountSettingsStyles";
import { useSelector } from "react-redux";
import { BsTruckFlatbed } from "react-icons/bs";
import ConfirmModal from "../modals/ConfirmModal";

const EditAccountSettings = () => {
  const password = useSelector((state) => state.password);
  const user = useSelector((state) => state.user);
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDetailedSection, setShowDetailedSection] =
    useState(BsTruckFlatbed);

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

  return (
    <React.Fragment>
      {showModal && (
        <ConfirmModal close={closeModal}>
          <Styled.Title style={{ margin: "2rem" }}>
            Confirm Save Account Details
          </Styled.Title>
          <Styled.EditButtonContainer style={{ margin: "2rem" }}>
            <Styled.ConfirmChangesButton>
              Confirm Changes
            </Styled.ConfirmChangesButton>
            <Styled.CancelButton data-close="close">Cancel</Styled.CancelButton>
          </Styled.EditButtonContainer>
        </ConfirmModal>
      )}
      {showDetailedSection && (
        <Styled.Card onSubmit={showConfirmModal}>
          <Styled.Title>Edit Account Details</Styled.Title>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="name">Display Name</Styled.Label>
            <Styled.Input
              type="text"
              name="name"
              id="name"
              value={user.displayName}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label htmlFor="email">Display Name</Styled.Label>
            <Styled.Input
              type="email"
              name="email"
              id="email"
              value={user.email}
            />
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label>Password</Styled.Label>
            <Styled.Label>Change Password</Styled.Label>
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
