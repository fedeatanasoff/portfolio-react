import React, { Component } from "react";
import Navbar from "./Navbar";

class Home extends Component {
  // componentDidMount() {
  //   this.setState({ nombre: this.props.data });
  // }

  render() {
    let data = this.props.data;
    return (
      <header id="home" className="animated fadeIn fast">
        <Navbar />
        <div className="row banner animated fadeIn">
          <div className="banner-text">
            <h1 className="responsive-headline">{data.name}</h1>
            <h3>
              <b className="subtitulo-header">&lt;{data.ocupacion} /&gt;</b>
            </h3>
            <hr />
          </div>
          <div className="row">
            <div className="social">
              {data.social.map((icono, index) => {
                return (
                  <a
                    href={icono.url}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    // const dataJson = "https://rockordie-photos.firebaseio.com/portfolio.json";

                    className="social-icon"
                  >
                    <i className={icono.className} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

export default Home;
