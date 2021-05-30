import React from "react";
import Directory from "./components/menu-component/directory-menu/directory-components";
import { HomePageContainer } from "./homepage.styles";
const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
