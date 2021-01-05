import "./App.css";
import NavBarComponent from "./Components/Layout/NavBarComponent";
import FooterComponent from "./Components/Layout/FooterComponent";
import LandingComponent from "./Components/Home/LandingComponent";
import store from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import MovieComponent from "./Components/Home/MovieComponent";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <NavBarComponent />
        <Route exact path="/" component={LandingComponent} />
        <Route exact path="/movie/:id" component={MovieComponent} />
        <FooterComponent />
      </HashRouter>
    </Provider>
  );
}

export default App;
