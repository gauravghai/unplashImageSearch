import React, { useState, useEffect, Component } from "react";
import axios from "axios";
const API_KEY = "yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo";
const count = 1;
function LoadImages(){
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos/?client_id=" + API_KEY)
        .then((data) => {
            setState(data.data);
        });
    } , [count])
    return state;
}

function SearchImages(params) {
    const [query, setQuery] = useState()
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+params+"&client_id=" + API_KEY)
        .then((data) => {
            setQuery(data.data.results);
        });
    }, [params])
    return query;
}
export {LoadImages, SearchImages};