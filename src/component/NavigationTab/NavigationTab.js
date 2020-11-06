import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhotosContainer from '../PhotosContainer/PhotosContainer';
import VideoContainer from '../VideoContainer/VideoContainer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  rootNav: {
    flexGrow: 1,
    marginTop : '20px'
  },
  bgNav : {
    color : 'black',
    backgroundColor : 'white',
    boxShadow : 'none'
  },
  mAutoNav : {
    margin : 'auto'
  }
}));

export default function NavigationTab() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.rootNav}>
      <AppBar className={classes.bgNav} position="static">
        <Tabs
          className={classes.mAutoNav}
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Wallpaper" {...a11yProps(0)} />
          <LinkTab label="Video" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
       <PhotosContainer/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <VideoContainer/>
      </TabPanel>
    </div>
  );
}