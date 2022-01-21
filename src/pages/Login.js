import styled from "styled-components";
import LoginContent from "../components/loginContent/LoginContent";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  flex-grow: 5;
`;

const Login = () => {
  return (
    <Main>
      <LoginContent />
    </Main>
  );
};

export default Login;
