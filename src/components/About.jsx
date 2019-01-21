import React, { Component } from "react";

class About extends Component {
  render() {
    console.log(this.props.data);
    let data = this.props.data;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns pic-float">
            <img className="profile-pic" src={"images/" + data.image} alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>Sobre mi</h2>

            <p>{data.bio}</p>

            <div className="row">
              <div className="columns ">
                <h2>Skills</h2>
                <div className="skills-icons">
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

            <div className="row">
              {/* <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Jonathan Doe</span>
                  <br />
                  <span>
                    1600 Amphitheatre Parkway
                    <br />
                    Mountain View, CA 94043 US
                  </span>
                  <br />
                  <span>(123)456-7890</span>
                  <br />
                  <span>anyone@website.com</span>
                </p>
              </div> */}

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
        </div>
      </section>
    );
  }
}

export default About;
