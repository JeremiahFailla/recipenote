import React from "react";
import * as Styled from "./ShowCaseStyles.js";
import { FaSearch } from "react-icons/fa";

const ShowCase = () => {
  return (
    <Styled.Card>
      <Styled.Img src={require("./../../imgs/soup3.jpg")} alt="Bowl of Soup" />
      <Styled.TextContent>
        <Styled.Title>Recipe Note</Styled.Title>
        <Styled.Quote>
          “I'm not an amazing cook. But I can follow a recipe!”
        </Styled.Quote>
        <Styled.QuoteName>- Rachel McAdams</Styled.QuoteName>
        <Styled.SeachBar>
          <Styled.SubmitButton>
            <FaSearch size="1.5rem" />
          </Styled.SubmitButton>
          <Styled.SearchInput type="text" placeholder="Find Recipe" />
        </Styled.SeachBar>
      </Styled.TextContent>
    </Styled.Card>
  );
};

export default ShowCase;
