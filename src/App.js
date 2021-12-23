import React from "react";
import Nav2 from "./router/Nav/nav2";
import Home from "./router/Home/Home";
import About from "./router/About/About";
import Country from "./router/Country/Country";
import countryName from "./router/Country/countryName/countryName";
import universityName from "./router/universityName/universityName";
import Contact from "./router/Contact/Contact";
import Apply from "./router/Apply/Apply";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <Router basename="/">
      <ScrollToTop />
      <div className="App">
        {/* <Nav /> */}
        <Nav2 />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/country/:countryId" component={countryName} />
          <Route
            exact
            path="/country/:countryId/:universityId"
            component={universityName}
          />
          <Route path="/contact" component={Contact} />
          <Route path="/Apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
