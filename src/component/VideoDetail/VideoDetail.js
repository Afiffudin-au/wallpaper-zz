import React from 'react'
import { useSelector } from 'react-redux'
import { selectVideoDetail } from '../../features/videoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
import './VideoDetail.scss'
function VideoDetail() {
  const videoDetail = useSelector(selectVideoDetail)
  const loading = videoDetail.loading
  const video = videoDetail.dataVideoDetails
  return (
    <div className="VideoDetail">
      <div style={{position : 'sticky',top : 0,marginBottom : '5px'}}>
      {
        loading && <LinearProgress color="secondary"/>
      }
      </div>
      <div className="VideoDetail__player">
        <video 
          controls
          src={video.video_files && video?.video_files[0].link}
          poster={video?.image}
          width="620">
        </video>
      </div>
    </div>
  )
}

export default VideoDetail
