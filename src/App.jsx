import React from "react";
import Axios from "axios";
import QuoteGen from "./QuoteGenerator";
import QuoteView from "./QuoteView";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: [],
      quote: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    Axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes").then(
      response => {
        this.setState({
          quote: response.data
        });
      }
    );
    Axios.get("https://random.dog/woof.json?filter=mp4,webm,gif").then(
      response => {
        this.setState({
          picture: response.data.url
        });
      }
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <br />
        <h1 style={{ color: "white" }}>Ron Swanson Quote Generator</h1>
        <hr style={{ border: "1px solid white" }} />
        <div className="row">
          <div className="col-sm-4">
            <QuoteGen onClick={this.handleOnClick} />
          </div>
          <div className="col-sm-8">
            <div className="card border-secondary text-secondary">
              <div className="card-header" style={{ fontWeight: "bold" }}>
                View Quote
              </div>
              <QuoteView
                picture={this.state.picture}
                quote={this.state.quote}
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
