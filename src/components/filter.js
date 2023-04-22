import React, { Component } from "react";
import "./filter.css";

class Filter extends Component {
  state = {
    category : 'No category',
    length : 'any',
    year : 0,
    dropDownYears: [],
  };

  componentDidMount() {
    const currentYear = new Date().getFullYear();
    const dropDownYears = Array.from({ length: currentYear - 2004 }, (_, i) => currentYear - i);
    this.setState({ dropDownYears });
  }

  //sending our filters up to app.js
  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] }, () =>
      this.props.updateFilters(this.state.category, this.state.length, this.state.year)
    );
  };

  render() {
    return (
      <form>
        <text id="filterTitle">
          {"Filters"}
          <br />
        </text>
        <div id="categoriesRow">
          <label id="categories">Category:</label>
          <select id="categoriesDropDown" name="category" onChange={this.handleChange}>
            <option value="No category">No category</option>
            <option value="Film & Animation">Film & Animation</option>
            <option value="Autos & Vehicles">Autos & Vehicles</option>
            <option value="Music">Music</option>
            <option value="Pets & Animals">Pets & Animals</option>
            <option value="Sports">Sports</option>
            <option value="Travel & Events">Travel & Events</option>
            <option value="Gaming">Gaming</option>
            <option value="People & Blogs">People & Blogs</option>
            <option value="Comedy">Comedy</option>
            <option value="News & Politics">News & Politics</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Howto & Style">Howto & Style</option>
            <option value="Education">Education</option>
            <option value="Science & Technology">Science & Technology</option>
            <option value="Nonprofits & Activism">Nonprofits & Activism</option>
            <option value="Movies">Movies</option>
            <option value="Trailers">Trailers</option>
          </select>
        </div>
        <div id="durationRow">
          <label htmlFor="videoDuration">Video Length:</label>
          <select id="durationDropDown" name="length" onChange={this.handleChange}>
            <option value="any">Any length</option>
            <option value="short">0-4 Minutes</option>
            <option value="medium">4-20 Minutes</option>
            <option value="long">20+ Minutes</option>
          </select>
        </div>
        <div id="yearRow">
          <label id="year">Year:</label>
          <select id="yearDropDown" name="year" onChange={this.handleChange}>
            <option value="0">Any Year</option>
            {this.state.dropDownYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </form>
    );
  }
}
export default Filter;
