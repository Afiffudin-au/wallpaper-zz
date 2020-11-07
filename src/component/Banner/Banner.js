import React from 'react'
import './Banner.scss'
import SearchBanner from './SearchBanner'
function Banner() {
  return (
    <div className="banner" id="navTop">
      <div className="banner__background">
        <img src="https://images.pexels.com/photos/5629220/pexels-photo-5629220.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt=""/>
      </div>
      <div className="banner__content">
        <div className="title">
          <h1>The free stock wallpapers & videos</h1>
        </div>
        <SearchBanner/>
        <div className="suggestion">
          <span className="suggestion__header">Suggested:</span>
          <span className="suggestion__title">outdoors  portrait  travel  black-and-white  people  boy  more</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
