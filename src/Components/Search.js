import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="container">
        <h1 style={{ "font-family": "Brush Script MT", }} >SEARCH</h1>
        <hr />
        <br /> <br />
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Author"
              aria-label="First name"
            />
            <br />
            <button type="button" className="btn btn-primary">
              Search by Author
            </button>
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Seach by Keywords"
              aria-label="Last name"
            />
            <br />
            <button type="button" className="btn btn-primary">
              Seach by Keywords
            </button>
          </div>
        </div>
        <br /><br />
      </div>
    );
  }
}
