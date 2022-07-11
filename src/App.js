import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
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