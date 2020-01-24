import React from "react";

export default class QuoteGenerator extends React.Component {
  render() {
    if (this.props.picture.length === 0) {
      return (
        <div
          className="card-body text-center"
          style={{ backgroundColor: "#ade2e6" }}
        >
          <div
            style={{ fontweight: "bold", fontSize: "24px", color: "#154144" }}
          >
            Welcome to the Ron Swanson Quote Generator (with dog pics)
          </div>
          <div
            style={{ fontweight: "normal", fontSize: "16px", color: "#154144" }}
          >
            Get started now by clicking the button on the left!
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div
            className="card-body text-center"
            style={{ backgroundColor: "#ade2e6" }}
          >
            <img
              src={this.props.picture}
              className="img-fluid mx-auto rounded"
            ></img>
          </div>
          <h2
            className="card-footer text-center"
            style={{ fontweight: "bold", color: "black" }}
          >
            {`"${this.props.quote}" - Ron`}
          </h2>
        </div>
      );
    }
  }
}
