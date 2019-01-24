import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      social: this.props.data,
      year: new Date().getFullYear()
    };
  }

  render() {
    console.log("footer =>", this.props.data);
    let data = this.state.social;
    return (
      <footer>
        <div className="row">
          <div className="social-footer">
            {data.map((icono, index) => {
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

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open" />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="footer-copy">
            <span>&copy; Copyright {this.state.year} </span>
            <span className="icon-code">
              <i className="fas fa-code" />
            </span>
            <span> Federico Atanasoff</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
