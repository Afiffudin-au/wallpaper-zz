import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyleNavbar from '../../useStyles/useStyleNavbar'
import { useGetSearchPhotos } from '../../useGetPhotos/useGetPhotos';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResultSearch } from '../../features/photoSlice';
import { addVideoSearch } from '../../features/videoSlice';
import { useGetVideoSearch } from '../../useGetVideos/useGetVideos';
function Search({typeSearch}) {
  const classes = useStyleNavbar()
  const {getSearchPhotos} = useGetSearchPhotos()
  const {getVideoSearch} = useGetVideoSearch()
  const [query,setQuery] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSearch = (e)=>{
    e.preventDefault()
    const userText = query.replace(/^\s+/, '').replace(/\s+$/, '');
    if(userText === ''){
      return
    }
    if(typeSearch === 'Wallpaper'){
      dispatch(addResultSearch({
        loading : true,
        removeCopyArray : true,
        dataPhotosResult : [],
      }))
      getSearchPhotos(query)
      history.push('/search-photo')
    }
    if(typeSearch === 'Videos'){
      dispatch(addVideoSearch({
        loading : true,
        removeCopyArray : true,
        dataVideo : []
      }))
      getVideoSearch(query)
      history.push('/search-video')
    }
  }
  return (
    <form action="">
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      onChange={(e)=>setQuery(e.target.value)}
      placeholder={'Search...' + typeSearch}
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}
    />  
    <button onClick={handleSearch} style={{display : 'none'}}></button>
  </form>
  )
}

export default Search
