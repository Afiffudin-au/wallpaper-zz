import React from 'react'
import './CardVideo.scss'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { IconButton } from '@material-ui/core';

function CardVideo({id,url,image}) {
  return (
    <div className="CardVideo">
      <div className="wrappper">
      <img src={image} alt={image}/>
        <div className="CardVideo__playBox">
          <IconButton>
            <PlayCircleOutlineIcon className="CardVideo__playIcon"/>
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default CardVideo
