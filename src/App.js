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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataJson: data,
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    console.log("desde el render =>", this.state.dataJson);

    return (
      <div className="App">
        <Navbar />
        <Home data={this.state.dataJson.main} />
        <About data={this.state.dataJson.main} />
        <Portfolio data={this.state.dataJson.portfolio} />
        <Contact />
        <Footer data={this.state.dataJson.main.social} />
      </div>
    );
  }
}

export default App;
