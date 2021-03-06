import styled from "styled-components";
import ShowCase from "../components/showcase/ShowCase";

const Main = styled.main`
  background: #fdd87e;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  flex-grow: 1;
`;

const Home = () => {
  return (
    <Main>
      <ShowCase />
    </Main>
  );
};

export default Home;
