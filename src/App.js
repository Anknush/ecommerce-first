import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage-components";
import ShopData from "./pages/homepage/shop/shop-components";
import Header from "./components/menu-component/header/header-component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopData} />
      </Switch>
    </div>
  );
}

export default App;
