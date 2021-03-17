import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path={"/react-portfolio"}>
            <Home />
          </Route>
          <Route exact path={["/about", "/about"]}>
            <About />
          </Route>
          <Route exact path={["/projects", "/projects"]}>
            <Projects />
          </Route>
          <Route exact path={["/contact", "/contact"]}>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
