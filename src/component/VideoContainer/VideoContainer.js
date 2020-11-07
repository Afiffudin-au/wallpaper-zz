import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos, selectVideos } from '../../features/videoSlice'
import { useGetVideoPopular } from '../../useGetVideos/useGetVideos'
import CardVideo from '../CardVideo/CardVideo'
import './VideoContainer.scss'
import LinearProgress from '@material-ui/core/LinearProgress';
import { IconButton } from '@material-ui/core'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
function VideoContainer() {
  const dispatch = useDispatch()
  const [pageNumber,setPageNumber] = useState(1)
  const {getVideoPopular} = useGetVideoPopular()
  const videosBlock = useSelector(selectVideos)
  const loading = videosBlock.loadingVideo
  const videos = videosBlock.videos
  const nextPage = videosBlock.totalResult
  let lengthPage = 0;
  videos?.forEach(video=>{
    lengthPage += video?.length
  })
  useEffect(()=>{
    dispatch(addVideos({
      removeCopyArray : true
    }))
  },[])
  useEffect(()=>{
    getVideoPopular(pageNumber)
  },[pageNumber])
  return (
    <div className="VideoContainer">
      <div className="VideoContainer__grid">
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
        loading && <LinearProgress color="secondary"/>
      }
      </div>
      {
        nextPage && <button className="button_increase" onClick={()=>setPageNumber(current => current + 1)}>Load More...</button>
      }
      {
        nextPage && <p className="VideoContainer__p1">{lengthPage} of {nextPage} Videos...</p>
      }
      {
        !loading && <IconButton>
          <a href="#navTop">
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
export default VideoContainer

