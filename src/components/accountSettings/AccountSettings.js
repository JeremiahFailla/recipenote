import React, { useRef, useState, useEffect } from "react";
import * as Styled from "./AccountSettingsStyle";
import { updateDisplayName, updateUserEmail } from "./../../firebase/firebase";
import { useSelector } from "react-redux";
import * as Spinner from "./../utils/Utils";

const AccountSettings = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const user = useSelector((state) => state.user);
  const [updateData, setUpdateData] = useState(false);

  const changeNameHandler = async () => {
    try {
      await updateDisplayName(nameRef.current.value);
      setUpdateData(!updateData);
    } catch (error) {
      console.log(error);
    }
  };

  const changeEmailHandler = async () => {
    try {
      await updateUserEmail(emailRef.current.email);
      setUpdateData(!updateData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(user);

  useEffect(() => {
    if (updateData) {
      setTimeout(() => {
        setUpdateData(false);
      }, 1000);
    }
  }, [updateData]);

  return (
    <React.Fragment>
      {updateData && (
        <Spinner.SpinnerContianer>
          <Spinner.Spinner></Spinner.Spinner>
        </Spinner.SpinnerContianer>
      )}
      {!updateData && (
        <Styled.Card>
          <Styled.Title>{user.displayName}'s Account Settings</Styled.Title>
          <Styled.CurrentData>
            New Display Name: {user.displayName}
          </Styled.CurrentData>
          <Styled.InputContainer>
            <Styled.ChangeInfoInput
              type="text"
              ref={nameRef}
              placeholder="Change Display Name"
            />
            <Styled.ChangeInfoButton onClick={changeNameHandler}>
              Save
            </Styled.ChangeInfoButton>
          </Styled.InputContainer>
          <Styled.CurrentData>New Email: {user.email}</Styled.CurrentData>
          <Styled.InputContainer>
            <Styled.ChangeInfoInput
              type="text"
              ref={emailRef}
              placeholder="Change Email"
            />
            <Styled.ChangeInfoButton onClick={changeEmailHandler}>
              Save
            </Styled.ChangeInfoButton>
          </Styled.InputContainer>
          <Styled.CurrentData>Password</Styled.CurrentData>
          <Styled.InputContainer>
            <Styled.ChangeInfoInput
              type="password"
              ref={passwordRef}
              placeholder="New Password"
            />
            <Styled.ChangeInfoButton onClick={changeNameHandler}>
              Save
            </Styled.ChangeInfoButton>
          </Styled.InputContainer>
        </Styled.Card>
      )}
    </React.Fragment>
  );
};

export default AccountSettings;
