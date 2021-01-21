import { IconButton, LinearProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './SearchVideos.scss'
import { useSelector } from 'react-redux';
import { selectVideoSearchBlock } from '../../features/videoSlice';
import { useGetVideoSearch } from '../../useGetVideos/useGetVideos';
import CardVideo from '../CardVideo/CardVideo';
function SearchVideos() {
  const [pageNumber,setPageNumber] = useState(1)
  const {getVideoSearch} = useGetVideoSearch()
  const {loadingVideo,totalResult : nextPage,query,videos} = useSelector(selectVideoSearchBlock)
  const checkLengthVideo = videos[0]?.length <=1 || videos[0]?.length === 0
  const checkCannotFind = checkLengthVideo && !loadingVideo
  useEffect(() => {
    if(pageNumber === 1){
      return
    }
   getVideoSearch(query,pageNumber)
  },[pageNumber])
  return (
    <div className="SearchVideos">
      {
        checkCannotFind && <p>Sorry We Cannot Find...</p>
      }
      <div className="SearchVideos__grid">
      {
        videos?.map(video=>(
          video.map(video=>(
            <div key={video.id}>
              <MemoizedChildComponent 
              id={video.id} 
              url={video.url} 
              image={video.image}
              />
            </div>
          ))
        ))
      }
      </div>

      <div style={{position : 'sticky',top : 0,marginBottom : '5px'}}>
        {
          loadingVideo && <LinearProgress color="secondary"/>
        }
      </div>
      {
        nextPage && <button className="button_increase" onClick={()=>setPageNumber(current => current + 1)}>Load More...</button>
      }
      {
        !loadingVideo && <IconButton>
          <a href="#navbar__top">
            <ArrowUpwardIcon className="backTop"/>
          </a>
        </IconButton>
      }
    </div>
  )
}
function ChildComponent({id,url,image}){
  return(
    <CardVideo 
      id={id}
      url={url}
      image={image}
    />
  )
}
const MemoizedChildComponent = React.memo(ChildComponent)
export default SearchVideos
