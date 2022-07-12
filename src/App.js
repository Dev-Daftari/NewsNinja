import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import ScrollToTop from "react-scroll-to-top";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [country, setCountry] = useState("in")
  const [search, setSearch] = useState("")
    return (
      <div>
        <BrowserRouter>
        <ScrollToTop
        smooth
        viewBox="0 0 384 512"
        svgPath="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z"
      />
        <Navbar setCountry = {setCountry} country = {country} setSearch = {setSearch} />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress} apikey = {apikey}  key="default" pageSize = {9} country = {country} category = '' search = {search} />} />
          <Route exact path="/business" element={<News setProgress = {setProgress} apikey = {apikey}  key="business" pageSize = {9} country = {country} category = 'business' search = {search} />} />
          <Route exact path="/entertainment" element={<News setProgress = {setProgress} apikey = {apikey}  key="entertainment" pageSize = {9} country = {country} category = 'entertainment' search = {search} />} />
          <Route exact path="/general" element={<News setProgress = {setProgress} apikey = {apikey}  key="general" pageSize = {9} country = {country} category = 'general' search = {search} />} />
          <Route exact path="/health" element={<News setProgress = {setProgress} apikey = {apikey}  key="health" pageSize = {9} country = {country} category = 'health' search = {search} />} />
          <Route exact path="/science" element={<News setProgress = {setProgress} apikey = {apikey}  key="science" pageSize = {9} country = {country} category = 'science' search = {search} />} />
          <Route exact path="/sports" element={<News setProgress = {setProgress} apikey = {apikey}  key="sports" pageSize = {9} country = {country} category = 'sports' search = {search} />} />
          <Route exact path="/technology" element={<News setProgress = {setProgress} apikey = {apikey}  key="technology" pageSize = {9} country = {country} category = 'technology' search = {search} />} />
    </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App