import styled from "styled-components";
import AccountSetting from "../components/accountSettings/AccountSettings";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  flex-grow: 1;
`;

const AccountSettings = () => {
  return (
    <Main>
      <AccountSetting></AccountSetting>
    </Main>
  );
};

export default AccountSettings;
