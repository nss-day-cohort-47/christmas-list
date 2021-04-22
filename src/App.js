import React from 'react';
//deployed to github, so using Hashrouter instead of BrowserRouter
// import { HashRouter as Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApplicationViews from "./components/ApplicationViews";
import { Header } from "./components/Header";


function App() {

  return (
    <div className="App">
      <Router>
          <Header />
          <ApplicationViews />
      </Router>

    </div>
  );
}

export default App;