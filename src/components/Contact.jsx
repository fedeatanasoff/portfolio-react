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
        // console.log(response);
        this.setState({ respuestaForm: response, loading: false });
      })
      .catch(error => {
        // console.log("error =>", error);
        this.setState({ respuestaForm: error, loading: false });
      });

    e.preventDefault();
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
    console.log("respuesta form =>", this.state.respuestaForm);

    return (
      <section id="contact">
        <div className="row section-head">
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
