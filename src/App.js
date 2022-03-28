import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import IndexUser from "./pages/users/Index";
import ShowUser from "./pages/users/Show";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={IndexUser} />
        <Route path="/users/:raceID" component={ShowUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
