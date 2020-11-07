import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import useStyleNavbar from '../../useStyles/useStyleNavbar';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WallpaperIcon from '@material-ui/icons/Wallpaper';
import Search from './Search';
function Navbar() {
  const classes = useStyleNavbar();
  const [typeSearch,setTypeSearch] = useState('Wallpaper')//default Wallpaper
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleVideosearch = ()=>{
    setTypeSearch('Videos')
  }
  const handleWallpaperSearch = ()=>{
    setTypeSearch('Wallpaper')
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Video</MenuItem>
      <MenuItem onClick={handleMenuClose}>Wallpaper</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleVideosearch}>
        <IconButton aria-label="show Video" color="inherit">
          <Badge color="secondary">
            <VideoLibraryIcon />
          </Badge>
        </IconButton>
        <p>Videos</p>
      </MenuItem>
      <MenuItem onClick={handleWallpaperSearch}>
        <IconButton aria-label="show Wallpaper" color="inherit">
          <Badge color="secondary">
            <WallpaperIcon />
          </Badge>
        </IconButton>
        <p>Wallpaper</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} id="navbar__top">
      <AppBar position="static" className={classes.bg}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Wallpaper-zz
          </Typography>
          <div className={classes.search}>
           <Search typeSearch={typeSearch}/>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton onClick={handleVideosearch} aria-label="show Video" color="inherit">
              <Badge color="secondary">
                <VideoLibraryIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={handleWallpaperSearch} aria-label="show Wallpaper" color="inherit">
              <Badge color="secondary">
                <WallpaperIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default Navbar
