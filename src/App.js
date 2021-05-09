import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage-components";
import ShopData from "./pages/homepage/shop/shop-components";
import Header from "./components/menu-component/header/header-component";
import SignInSignUpPage from "./pages/homepage/sign-in-sign-up/sign-in-sign-up-components";
import React from "react";
import { connect } from "react-redux";
import { auth, createUserData } from "./firabase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
class App extends React.Component {
  unSebscribedAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSebscribedAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserData(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount() {
    this.unSebscribedAuth();
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopData} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchProps)(App);
