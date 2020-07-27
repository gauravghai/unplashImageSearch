import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { val: "" };

  onInputChange = (event) => {
    this.setState({ val: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="flexContainer">
          <input
            className="inputStyle"
            type="text"
            value={this.state.val}
            onChange={this.onInputChange}
            placeholder="Search for images here..."
          />
          <button className="search-btn" onClick={this.onFormSubmit}>
            <img
              src="https://images.avishkaar.cc/workflow/newhp/search-white.png"
              alt="search"
            />
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
