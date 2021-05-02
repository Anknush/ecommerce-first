import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage-components";

const HatsPge = () => (
  <div>
    <h1>Helllo Baby</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPge} />
      </Switch>
    </div>
  );
}

export default App;
