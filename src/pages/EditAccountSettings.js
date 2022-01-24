import styled from "styled-components";
import EditAccountSetting from "../components/editAccountSettings/EditAccountSettings";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  flex-grow: 1;
`;

const EditAccountSettings = () => {
  return (
    <Main>
      <EditAccountSetting></EditAccountSetting>
    </Main>
  );
};

export default EditAccountSettings;
