import React, { Component } from "react";
import Title from "./components/title.js";
import MiddleRow from "./components/middleRow.js";
import EmbeddedVideo from "./components/embeddedVideo.js";
import utils from  "./utils.js";

class App extends Component {
  constructor(props){
    super(props);
    this.updateFilters = this.updateFilters.bind(this);
    this.state = {
      videoURL: "",
      searchWords: [],
      category: 0,
      length: "any",
      year: 0
    };
  }

  async componentDidMount() {
    await this.createWordList();
  }

  //getting values from our filter
  updateFilters(categoryName, duration, selectedYear) {
    let categoryNumber = utils.getCategoryMap()
    this.setState({ category: categoryNumber}); 
    this.setState({ length: duration}); 
    this.setState({ year: selectedYear}); 
    console.log("Category:", categoryName, "ID:", categoryNumber);
    console.log("Length:", duration);
    console.log("Year:", selectedYear);
  };

  async getVideo() {
    let keyword = this.state.searchWords[Math.floor(Math.random() * this.state.searchWords.length + 1)];
    console.log("Chosen Keyword: " + keyword);
    const youtubeAPIKey = "AIzaSyAWwZk3tMo_OZp0JZ9Y17oxykJpng6Q-nY";

    let baseApiUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" + youtubeAPIKey;
    baseApiUrl = this.applyFilters(baseApiUrl);
    let apiUrlWithKeyword = baseApiUrl + "&q=" + keyword

    //make API call
    let res = await fetch(apiUrlWithKeyword);
    console.log(res)
    let data = await res.json(); 
    let searchLength = 0;

    //checking if api quota has been exceeded, searchlength will be undefined
    try{
      searchLength = data.items.length;
    }
    catch (error){
      alert("The Youtube API quota for this project has been exceeded. Unfortunately we can only make 100 requests each day. Quota resets at 12AM PST.");
    }

    //if true, either a bad keyword was picked, or filters are not allowing for a video to be found
    if (searchLength === 0){
      //we will make the search without specifying a keyword
      res = await fetch(baseApiUrl);
      data = await res.json(); 
      searchLength = data.items.length;

      if (searchLength === 0){
        alert("Could not find a video. The selected filters may not be compatible with eachother.");
      }
      else{
        alert("Found a video, but didn't use keyword");
      }
    }

    let idIndex = Math.floor(Math.random() * searchLength);
    let randomURL = "https://www.youtube.com/embed/" + data.items[idIndex].id.videoId;
    this.setState({ videoURL: randomURL });
    return randomURL;
  }

  applyFilters(baseApiUrl) {
    //filter by category, length, and year
    if (this.state.category !== 0) {
      baseApiUrl += "&videoCategoryId=" + this.state.category;
    }

    if (this.state.length !== "any") {
      baseApiUrl += "&videoDuration=" + this.state.length;
    }

    if (this.state.year !== 0) {
      baseApiUrl += "&publishedBefore=" + this.state.year + "-12-31T00:00:00.0Z" +
        "&publishedAfter=" + this.state.year + "-01-01T00:00:00.0Z";
    }
    return baseApiUrl;
  }

  //creating random word list that we will use to search for a video
  async createWordList() {
    try {
      const response = await fetch("/common-words.json");
      const data = await response.json();
      console.log(data);
      this.setState({ searchWords: data });
    } catch (error) {
      console.error(error);
    }
  }

  getRandomVideo = () => {
    this.getVideo();
  };

  render() {
    return (
      <body>
        <div>
          <Title />
          <MiddleRow updateFilters={this.updateFilters} getRandomVideo={this.getRandomVideo} />
          <EmbeddedVideo url={this.state.videoURL} />
        </div>
      </body>
    );
  }
}
export default App;
