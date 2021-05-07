import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage-components";
import ShopData from "./pages/homepage/shop/shop-components";
import Header from "./components/menu-component/header/header-component";
import SignInSignUpPage from "./pages/homepage/sign-in-sign-up/sign-in-sign-up-components";
import React from "react";
import { auth } from "./firabase.utils";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unSebscribedAuth = null;
  componentDidMount() {
    this.unSebscribedAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unSebscribedAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopData} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
