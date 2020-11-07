import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import useStyleBanner from '../../useStyles/useStyleBanner'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResultSearch } from '../../features/photoSlice';
import { useGetSearchPhotos } from '../../useGetPhotos/useGetPhotos';
function SearchBanner() {
  const [query,setQuery] = useState('')
  const classes = useStyleBanner()
  const history = useHistory()
  const dispatch = useDispatch()
  const {getSearchPhotos} = useGetSearchPhotos()
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
      <div className={classes.searchBanner}>
        <div className={classes.searchIconBanner}>
          <SearchIcon />
        </div>
        <InputBase
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="Search… Wallpaper"
          classes={{
            root: classes.inputRootBanner,
            input: classes.inputInputBanner,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
        </div>
        <button onClick={handleSearch} style={{display : 'none'}}></button>
    </form>
  )
}

export default SearchBanner
