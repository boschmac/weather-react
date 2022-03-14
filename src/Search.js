import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div>
      <h1>Weather App</h1>
      <h2 id="current-date"></h2>

      <form className="search" id="city-search">
        <div className="row justify-content-md-center">
          <div className="col-2"></div>
          <div className="col-3 search-bar">
            <input
              type="text"
              placeholder="Search for location"
              id="city-input"
            />
          </div>
          <div className="col-1 search-bar">
            <input
              type="submit"
              className="submit-button button"
              placeholder="Search"
            />
          </div>
          <div className="col-3">
            <button className="button" id="current-city">
              Current City
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
