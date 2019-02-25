import React, { Component } from "react";
import Navbar from "./Navbar";
import ReactGA from "react-ga";

class Home extends Component {

  componentDidMount(){
    ReactGA.initialize('UA-84842253-2')
    ReactGA.pageview('/home')
  }

  render() {
    console.log("Hola curioso :)");

    let data = this.props.data;
    return (
      <header id="home" className="animated fadeIn">
        <Navbar />
        <div className="row banner animated fadeIn slow">
          <div className="banner-text">
            <h1 className="responsive-headline">{data.name}</h1>
            <h3>
              <b className="subtitulo-header">&lt;{data.ocupacion} /&gt;</b>
            </h3>
            <hr />
          </div>
          <div className="row">
            <div className="social animated fadeIn slow">
              {data.social.map((icono, index) => {
                return (
                  <a
                    href={icono.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                  >
                    <i className={icono.className} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p className="scrolldown animated fadeIn slow">
          <a className="smoothscroll" href="#about">
            <i className="fas fa-angle-down" />
          </a>
        </p>
      </header>
    );
  }
}

export default Home;
