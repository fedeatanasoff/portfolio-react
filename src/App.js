import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import data from "./data/data.json";

const dataJson = "https://rockordie-photos.firebaseio.com/portfolio.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJson: data,
      loading: true
    };
  }

  render() {
    console.log("desde el render =>", this.state.dataJson);

    return (
      <div className="App">
        <Navbar />
        <Home data={this.state.dataJson.main} />
        <About data={this.state.dataJson.main} />
        <Portfolio />
        <Contact />
        <Footer />
        <Preloader />
      </div>
    );
  }
}

export default App;
