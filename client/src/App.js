import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Search from "./pages/Search";
import Saved from "./pages/Saved";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/about" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
