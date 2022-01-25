import React, { useState, useEffect } from "react";
import * as Styled from "./ShowCaseStyles.js";
import * as Spinner from "./../utils/Utils";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const ShowCase = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const alreadyLoaded = useSelector((state) => state.siteLoaded);

  const hideSpinnerHandler = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "siteLoaded" });
    };
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <Spinner.SpinnerContianer
          firstLoad={!alreadyLoaded && "5000"}
          notFirstLoad={alreadyLoaded && "500"}
        >
          <Spinner.Spinner></Spinner.Spinner>
        </Spinner.SpinnerContianer>
      )}
      <Styled.Card>
        <Styled.Img
          src={require("./../../imgs/soup3.jpg")}
          alt="Bowl of Soup"
          onLoad={hideSpinnerHandler}
        />
        <Styled.TextContent>
          <Styled.Title>Recipe Note</Styled.Title>
          <Styled.Quote>
            “I'm not an amazing cook. But I can follow a recipe!”
          </Styled.Quote>
          <Styled.QuoteName>- Rachel McAdams</Styled.QuoteName>
          <Styled.SeachBar>
            <Styled.SubmitButton>
              <FaSearch />
            </Styled.SubmitButton>
            <Styled.SearchInput type="text" placeholder="Find Recipe" />
          </Styled.SeachBar>
        </Styled.TextContent>
      </Styled.Card>
    </React.Fragment>
  );
};

export default ShowCase;
