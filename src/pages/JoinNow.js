import styled from "styled-components";
import JoinNowContent from "../components/joinNowContent/JoinNowContent";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  flex-grow: 1;
`;

const JoinNow = () => {
  return (
    <Main>
      <JoinNowContent />
    </Main>
  );
};

export default JoinNow;
