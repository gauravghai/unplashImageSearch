import React, { useState, useEffect, Component } from "react";
import './App.css';
import {LoadImages,SearchImages} from './components/api'
import Image from './components/image';
import SearchQuery from "./components/search";

function App() {
  const [searchQ, setSearchQ] = useState()
  const [query, setQuery] = useState()

  const data = LoadImages();
  console.log(data);
  const search = () => {
    setSearchQ(query);
  }
  const searchData = SearchImages(searchQ);

  const reset = () => {
    setSearchQ('');
  }
  return (
    <React.Fragment>
    <div className="container py-5">
      <h1 className="text-center m-0">Image Search App</h1>
      <p className="pb-4 text-center m-0">Using React.js</p>
      <div className="pb-5">
        <div className="text-center">
        <input
        className="inputStyle col-6 py-2"
        style={{borderRadius: '30px'}}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images here..."
        />
        <button className="search" onClick={search}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3611 15.2778H16.2639L15.875 14.9028C17.2832 13.2695 18.0571 11.1843 18.0556 9.02778C18.0556 7.24226 17.5261 5.49683 16.5341 4.01222C15.5421 2.52761 14.1322 1.37049 12.4826 0.687203C10.833 0.0039116 9.01777 -0.174869 7.26655 0.17347C5.51533 0.521809 3.90674 1.38162 2.64418 2.64418C1.38162 3.90674 0.521809 5.51533 0.17347 7.26655C-0.174869 9.01777 0.0039116 10.833 0.687203 12.4826C1.37049 14.1322 2.52761 15.5421 4.01222 16.5341C5.49683 17.5261 7.24226 18.0556 9.02778 18.0556C11.2639 18.0556 13.3194 17.2361 14.9028 15.875L15.2778 16.2639V17.3611L22.2222 24.2917L24.2917 22.2222L17.3611 15.2778ZM9.02778 15.2778C5.56945 15.2778 2.77778 12.4861 2.77778 9.02778C2.77778 5.56945 5.56945 2.77778 9.02778 2.77778C12.4861 2.77778 15.2778 5.56945 15.2778 9.02778C15.2778 12.4861 12.4861 15.2778 9.02778 15.2778Z" fill="#303030"/>
          </svg>
        </button>
        </div>
        <div onClick={reset} className="text-center">{searchQ && ('Reset')}</div>
      </div>
      {searchData && searchQ && searchData.length == 0 && <p className="text-center col-12">No result found</p>}
      <div className="contain">
      {searchQ ?
        searchData.map((img, key) => (
        <Image src={img.urls.thumb} key={key} />
      )) : data.map((img, key) => (
        <Image src={img.urls.thumb} key={key} />
      ))}
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
