import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useStylesNavbar } from '../../useStyles/useStyles';
import { useGetSearchPhotos } from '../../useGetPhotos/useGetPhotos';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResultSearch } from '../../features/photoSlice';
function Search() {
  const classes = useStylesNavbar()
  const {getSearchPhotos} = useGetSearchPhotos()
  const [query,setQuery] = useState('')
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSearch = (e)=>{
    e.preventDefault()
    if(!query) return
    dispatch(addResultSearch({
      loading : true,
      removeCopyArray : true,
      dataPhotosResult : [],
    }))
    getSearchPhotos(query)
    history.push('/search-photo')
  }
  return (
    <form action="">
    <div className={classes.searchIcon}>
      <SearchIcon />
    </div>
    <InputBase
      onChange={(e)=>setQuery(e.target.value)}
      placeholder="Search…"
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
