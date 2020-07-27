import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";
const API_KEY = "yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo";

class App extends React.Component {
  state = { images: [], random: [], search: false };
  componentDidMount() {
    axios
      .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
      .then((data) => {
        this.setState({ random: data.data });
      });
  }
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });
    this.setState({ images: response.data.results, search: true });
  };
  render() {
    return (
      <React.Fragment>
        <SearchBar userSubmit={this.onSearchSubmit} />

        {this.state.search ? (
          <React.Fragment>
            {" "}
            <h1 style={{ textTransform: "capitalize", textAlign: "center" }}>
              {this.state.images.length === 0 ? "not found" : null}
            </h1>
            <ImageList foundImages={this.state.images} />
          </React.Fragment>
        ) : (
          <ImageList foundImages={this.state.random} />
        )}
      </React.Fragment>
    );
  }
}

export default App;
