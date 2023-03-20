import React, { Component } from "react";
import "./filter.css";

class Filter extends Component {
  state = {
    category : 'No category',
    length : 'any',
    year : 0,
  };

  //sending our filters up to app.js
  handleChange = (event) => {
    this.setState({ [event.target.name]: [event.target.value] }, () =>
      this.props.updateFilters(this.state.category.toString(), this.state.length, this.state.year)
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
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2020">2021</option>
            <option value="2020">2022</option>
            <option value="2020">2023</option>
          </select>
        </div>
      </form>
    );
  }
}
export default Filter;
