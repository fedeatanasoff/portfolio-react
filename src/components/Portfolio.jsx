import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    let data = this.props.data;
    console.log("portfolio =>", data.projects);
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1 className="h1-titulo">portfolio</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {/*  ----- TARJETAS ----- */}
              {data.projects.map((project, index) => {
                return (
                  <div className="columns portfolio-item" key={index}>
                    <div className="item-wrap">
                      <a href={`#${project.modal}`} title="">
                        <img alt="" src={`images/portfolio/${project.image}`} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{project.title}</h5>
                            <p>{project.category}</p>
                          </div>
                        </div>
                        <div className="link-icon">
                          <i className="icon-plus" />
                        </div>
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#" title="">
                  <img alt="" src="images/portfolio/coffe.jpg" />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>Rockordie Photos</h5>
                      <p>Web Design</p>
                    </div>
                  </div>
                  <div className="link-icon coming-project">
                    <p className="">proximamente</p>
                  </div>
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/*------- MODALS -------- */}
          {data.projects.map((project, index) => {
            return (
              <div
                key={index}
                id={project.modal}
                className="popup-modal mfp-hide"
              >
                <img
                  className="scale-with-grid"
                  src={`images/portfolio/modals/modal-${project.image}`}
                  alt=""
                />

                <div className="description-box">
                  <h4>{project.title}</h4>
                  {/* <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p> */}
                  <span className="categories">
                    <i className="fa fa-tag" />
                    <b className="cat-modal">{project.tags}</b>
                  </span>
                </div>

                <div className="link-box">
                  {project.url !== "" ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar Sitio
                    </a>
                  ) : (
                    ""
                  )}
                  <a className="popup-modal-dismiss">Cerrar</a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Portfolio;
