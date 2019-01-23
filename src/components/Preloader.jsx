import React, { Component } from "react";

class Preloader extends Component {
  render() {
    return (
      <div className="preloader">
        <span className="preloader-span">
          <i class="fas fa-circle-notch fa-spin fa-3x" />
        </span>
      </div>
    );
  }
}

export default Preloader;
