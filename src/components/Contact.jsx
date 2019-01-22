import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      respuestaForm: ""
    };
  }

  handleForm = e => {
    axios
      .post("https://formcarry.com/s/97jxwL-7kNns", this.state, {
        headers: { Accept: "application/json" }
      })
      .then(response => {
        console.log(response);
        this.setState({ respuestaForm: response });
      })
      .catch(error => {
        console.log("error =>", error);
        this.setState({ respuestaForm: error });
      });

    e.preventDefault();
  };

  handleFields = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log("respuesta form =>", this.state.respuestaForm);
    return (
      <section id="contact">
        <div className="row section-head">
          {/* <div className="two columns header-col">
            <h1>
              <span>nada</span>
            </h1>
          </div> */}

          <div className="twelve columns">
            <h1 className="h1-titulo">contacto</h1>
            <p className="">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="twelve columns">
            {this.state.respuestaForm.status === 200 ? (
              <div id="message-success">
                <i className="fa fa-check" />
                Tu mensaje ha sido enviado!
                <br />
              </div>
            ) : (
              <form onSubmit={this.handleForm}>
                <fieldset>
                  <div>
                    <label htmlFor="nombre">
                      Nombre <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactName"
                      name="nombre"
                      onChange={this.handleFields}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      size="35"
                      id="contactEmail"
                      name="email"
                      onChange={this.handleFields}
                    />
                  </div>

                  <div>
                    <label htmlFor="asunto">Asunto</label>
                    <input
                      type="text"
                      size="35"
                      id="contactSubject"
                      name="asunto"
                      onChange={this.handleFields}
                    />
                  </div>

                  <div>
                    <label htmlFor="mensaje">
                      Mensaje <span className="required">*</span>
                    </label>
                    <textarea
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="mensaje"
                      onChange={this.handleFields}
                    />
                  </div>

                  <div>
                    <button className="submit">Enviar</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>
            )}

            {this.state.respuestaForm !== "" &&
            this.state.respuestaForm.status !== 200 ? (
              <div id="message-warning">
                <i className="fas fa-times" /> Hubo un error. Intente nuevamente
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
