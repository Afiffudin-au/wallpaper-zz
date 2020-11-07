import React from 'react';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PhotoDetail from './component/PhotoDetail/PhotoDetail';
import SearchPhotos from './component/SearchPhotos/SearchPhotos';
import Navbar from './component/Navbar/Navbar';
import SearchVideos from './component/SearchVideos/SearchVideos';
import VideoDetail from './component/VideoDetail/VideoDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
         <Route path="/search-video">
            <Navbar/>
            <SearchVideos/>
          </Route>
          <Route path="/search-photo">
            <Navbar/>
            <SearchPhotos/>
          </Route>
          <Route path="/video-detail">
            <VideoDetail/>
          </Route>
          <Route path="/photo-detail">
            <PhotoDetail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
