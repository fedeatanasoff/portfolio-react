import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class About extends Component {
  render() {
    console.log(this.props.data);
    let data = this.props.data;
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section id="about" className="animated flash slow">
          <div className="row titulo-sec">
            <h2 className="h1-titulo animated flash slow">Sobre mi</h2>
          </div>
          <div className="row">
            <div className="three columns pic-float">
              <img
                className="profile-pic"
                src={"images/" + data.image}
                alt=""
              />
            </div>

            <div className="nine columns main-col">
              <p>{data.bio}</p>

              <div className="row">
                <div className="columns ">
                  <div className="skills-icons">
                    <h1 className="h1-titulo titulo-skill">Skills</h1>
                    {data.skills.map((skill, index) => {
                      return (
                        <span className="icon-skill" key={index}>
                          <i className={skill.className} />
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <i className="fa fa-download" />
                    Descargar CV
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default About;
