import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage-components";
import ShopData from "./pages/homepage/shop/shop-components";
import Header from "./components/menu-component/header/header-component";
import SignInSignUpPage from "./pages/homepage/sign-in-sign-up/sign-in-sign-up-components";
function App() {
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

export default App;
