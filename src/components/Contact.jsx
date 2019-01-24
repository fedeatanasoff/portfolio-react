import React, { Component } from "react";
import axios from "axios";
import ScrollAnimation from "react-animate-on-scroll";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
      respuestaForm: "",
      loading: false
    };
  }

  handleForm = e => {
    this.setState({ respuestaForm: "", loading: true });
    axios
      .post("https://formcarry.com/s/97jxwL-7kNn", this.state, {
        headers: {
          Accept: "application/json"
        }
      })
      .then(response => {
        this.setState({ respuestaForm: response, loading: false });
      })
      .catch(error => {
        this.setState({ respuestaForm: error, loading: false });
      });

    e.preventDefault();

    // ---- SIMULACION DE ENVIO DE EMAIL

    // let condicion = false;

    // this.setState({ respuestaForm: "", loading: true });
    // setTimeout(() => {
    //   if (condicion) {
    //     this.setState({ respuestaForm: { status: 200 }, loading: false });
    //   } else {
    //     this.setState({ respuestaForm: { status: 200 }, loading: false });
    //   }
    // }, 2000);
  };

  handleFields = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn">
        <section id="contact" className="animated fadeIn">
          <div className="row section-head animated fadeIn slow">
            <div className="twelve columns">
              <h1 className="h1-titulo">contacto</h1>
              <p className="">
                Puedes ponerte en contacto conmigo a traves del siguiente
                formulario, enviandome un mail a{" "}
                <span className="contact-email">fede.atanasoff@gmail.com</span>{" "}
                o a tambien a traves de mis redes sociales, que por lo general,
                suelo usarlas activamente.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              {this.state.respuestaForm.status === 200 ? (
                <ScrollAnimation animateIn="fadeIn">
                  <div id="message-success">
                    <i className="fa fa-check" />
                    Tu mensaje ha sido enviado!
                    <br />
                  </div>
                </ScrollAnimation>
              ) : (
                <form
                  onSubmit={this.handleForm}
                  className="animated fadeIn slow"
                >
                  <fieldset>
                    {/* --- nombre input */}
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
                        placeholder="ingrese su nombre"
                        required
                      />
                    </div>
                    {/* --- email input */}
                    <div>
                      <label htmlFor="email">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        size="35"
                        id="contactEmail"
                        name="email"
                        placeholder="ingrese su email"
                        onChange={this.handleFields}
                        required
                      />
                    </div>
                    {/* --- asunto input */}
                    <div>
                      <label htmlFor="asunto">
                        Asunto <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        size="35"
                        id="contactSubject"
                        name="asunto"
                        onChange={this.handleFields}
                        placeholder="ingrese un asunto"
                        required
                      />
                    </div>
                    {/* --- mensaje input */}
                    <div>
                      <label htmlFor="mensaje">
                        Mensaje <span className="required">*</span>
                      </label>
                      <textarea
                        cols="50"
                        rows="1"
                        id="contactMessage"
                        name="mensaje"
                        onChange={this.handleFields}
                        placeholder="ingrese aqui su consulta "
                        required
                      />
                    </div>
                    {/* --- Button */}
                    <div>
                      <button className="submit" disabled={this.state.loading}>
                        {this.state.loading ? (
                          <span className="spinner-button">
                            <i className="fas fa-spinner fa-spin" />
                          </span>
                        ) : (
                          "Enviar"
                        )}
                      </button>
                    </div>
                  </fieldset>
                </form>
              )}

              {this.state.respuestaForm !== "" &&
              this.state.respuestaForm.status !== 200 ? (
                <div id="message-warning">
                  <i className="fas fa-times" /> Hubo un error. Intente
                  nuevamente
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </ScrollAnimation>
    );
  }
}

export default Contact;
