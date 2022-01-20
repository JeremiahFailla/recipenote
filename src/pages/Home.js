import styled from "styled-components";
import ShowCase from "../components/showcase/ShowCase";

const Main = styled.main`
  background: linear-gradient(
    90deg,
    #92bbb3 4.22%,
    rgba(146, 187, 179, 0.83) 46.35%,
    rgba(146, 187, 179, 0.61) 65.54%,
    rgba(146, 187, 179, 0.37) 83.19%,
    rgba(146, 187, 179, 0.1) 97.41%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 0 2rem;
  /* height: 100vh; */
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
