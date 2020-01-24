import React from "react";

export default class QuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.props.onClick();
  }

  render() {
    return (
      <div className="card border-secondary text-secondary">
        <div className="card-header" style={{ fontWeight: "bold" }}>
          Find A Quote
        </div>
        <div style={{ backgroundColor: "#ade2e6" }} className="card-body">
          <h3
            style={{
              fontweight: "bold",
              color: "#154144"
            }}
            className="text-center"
          >
            Click below to generate a quote random quote by "Ron Swanson" from
            "Parks and Recreation"
          </h3>
          <br />
          <h5
            style={{ color: "#154144", fontweight: "normal" }}
            className="text-center"
          >
            ...and generate a cute dog pic to go with it
          </h5>
        </div>

        <div className="card-footer">
          <button
            type="button"
            style={{ width: "100%" }}
            className="btn-info create-todo"
            onClick={this.handleButtonClick}
          >
            Give Me Quote!
          </button>
        </div>
      </div>
    );
  }
}
