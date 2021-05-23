import React from "react";
import Directory from "./components/menu-component/directory-menu/directory-components";
import styled from "styled-components";
const HomePage = () => {
  const HomePageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px;
  `;

  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
