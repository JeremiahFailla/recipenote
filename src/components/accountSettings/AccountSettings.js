import React, { useState, useEffect } from "react";
import * as Styled from "./AccountSettingsStyle";
import { useSelector } from "react-redux";
import * as Spinner from "./../utils/Utils";

const starPassword = (pass) => {
  const starredPassword = [];
  pass.split("").forEach(() => {
    starredPassword.push("*");
  });
  return starredPassword;
};

const AccountSettings = () => {
  const user = useSelector((state) => state.user);
  const [updateData, setUpdateData] = useState(false);
  const password = useSelector((state) => state.password);
  const starredPassword = starPassword(password).join("");

  useEffect(() => {
    if (updateData) {
      setTimeout(() => {
        setUpdateData(false);
      }, 1000);
    }
  }, [updateData]);

  let date = new Date(user.metadata.creationTime);
  date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

  return (
    <React.Fragment>
      {updateData && (
        <Spinner.SpinnerContianer>
          <Spinner.Spinner></Spinner.Spinner>
        </Spinner.SpinnerContianer>
      )}
      {!updateData && (
        <Styled.Card>
          <Styled.Title>{user.displayName}'s Account Details</Styled.Title>
          <Styled.InfoContainer>
            <Styled.Label>Display Name</Styled.Label>
            <Styled.Label>{user.displayName}</Styled.Label>
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label>Email</Styled.Label>
            <Styled.Label>{user.email}</Styled.Label>
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label>Password</Styled.Label>
            <Styled.Label>{starredPassword}</Styled.Label>
          </Styled.InfoContainer>
          <Styled.InfoContainer>
            <Styled.Label>Date Joinned</Styled.Label>
            <Styled.Label>{date}</Styled.Label>
          </Styled.InfoContainer>
          <Styled.EditButtonContainer>
            <Styled.EditButton to="/accountsettings/editsettings">
              Edit Details
            </Styled.EditButton>
          </Styled.EditButtonContainer>
        </Styled.Card>
      )}
    </React.Fragment>
  );
};

export default AccountSettings;
