import React from 'react'
import './CardVideo.scss'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { IconButton } from '@material-ui/core';
import { useGetVideoDetail } from '../../useGetVideos/useGetVideos';
import LazyLoad from 'react-lazyload';
import { useHistory } from 'react-router-dom';
function CardVideo({id,url,image}) {
  const {getVideoDetail} = useGetVideoDetail()
  const history = useHistory()
  const handleDetail = ()=>{
    getVideoDetail(id)
    history.push('/video-detail')
  }
  return (
    <div className="CardVideo">
      <div className="wrappper">
      <LazyLoad height={431}>
        <img src={image} alt={image}/>
          <div className="CardVideo__playBox">
            <IconButton onClick={handleDetail}>
              <PlayCircleOutlineIcon className="CardVideo__playIcon"/>
            </IconButton>
          </div>
      </LazyLoad>
      </div>
    </div>
  )
}

export default CardVideo
