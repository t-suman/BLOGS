import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Home from "./containers/Home/home";
import ContactUs from "./containers/ContactUs/contactUs";
import Post from "./containers/Post/post";
import AboutUs from "./containers/AboutUs/aboutUs";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/" exact component={Home} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/post/:postId" exact component={Post} />
      </div>
    </Router>
  );
}

export default App;
