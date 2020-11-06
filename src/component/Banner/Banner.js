import React from 'react'
import './Banner.scss'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStylesBanner } from '../../useStyles/useStyles';
function Banner() {
  const classes = useStylesBanner()
  return (
    <div className="banner" id="navTop">
      <div className="banner__background">
        <img src="https://images.pexels.com/photos/5629220/pexels-photo-5629220.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" alt=""/>
      </div>
      <div className="banner__content">
        <div className="title">
          <h1>The free stock wallpapers & videos</h1>
        </div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
        </div>
        <div className="suggestion">
          <span className="suggestion__header">Suggested:</span>
          <span className="suggestion__title">outdoors  portrait  travel  black-and-white  people  boy  more</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
