import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {/*  ----- TARJETAS ----- */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title="">
                    <img alt="" src="images/portfolio/reddo.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Reddo Traducciones</h5>
                        <p>Web Design</p>
                      </div>
                    </div>
                    <div className="link-icon">
                      <i className="icon-plus" />
                    </div>
                  </a>
                </div>
              </div>
              {/* fin tarjeta */}
            </div>
          </div>

          {/*------- MODALS -------- */}
          <div id="modal-01" className="popup-modal mfp-hide">
            <img
              className="scale-with-grid"
              src="images/portfolio/modals/modal-reddo.png"
              alt=""
            />

            <div className="description-box">
              <h4>Reddo Traducciones</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span className="categories">
                <i className="fa fa-tag" />
                Wordpress, PHP, CSS, Bootstrap
              </span>
            </div>

            <div className="link-box">
              <a className="popup-modal-dismiss">Cerrar</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
