import { IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { useStylesModal } from '../../useModalStyle/ModalStyle'
import './ModalDetail.scss'
import CloseIcon from '@material-ui/icons/Close';
import { useSelector } from 'react-redux';
import { selectPhotoDetailsBlock } from '../../features/photoSlice';
import { LinearProgress } from '@material-ui/core';
import { useGetDownloadPhoto } from '../../useDownload/useGetDownloadPhoto';
function ModalDetail({handleClose}) {
  const classes = useStylesModal()
  const photoDetailBlock = useSelector(selectPhotoDetailsBlock)
  const {getDownloadPhoto,loadingDownload} = useGetDownloadPhoto()
  const {loadingPhotos} = photoDetailBlock
  const {photos} = photoDetailBlock
  const [previewUrl,setPreview] = useState('')
  const handlePreview = (url)=>{
    setPreview(url)
  }
  return (
    <div className={classes.paper + ' ModalDetail'}>
    {
       loadingPhotos && 
        <div className="loadingPhotos">
        <LinearProgress color="primary"/>
       </div>
     }
     {
       loadingDownload  && 
      <div style={{marginBottom : '8px',position : 'sticky',top : '0'}} className="loading">
       <LinearProgress color="primary"/>
      </div>
     }
     <div className="close">
       <IconButton onClick={handleClose} className="close_icon">
        <CloseIcon style={{color : 'white'}}/>
       </IconButton>
     </div>
     <div className="wrapper">
      <div className="imageContainer">
        {
          previewUrl ? (
            <img src={previewUrl} alt={previewUrl}/>
          ):(
            <img src={photos.src?.portrait} alt={photos.src?.portrait}/>
          )
        }
       
      </div>
      <div className="Preview">
      {
        Object.keys(photos.src || {}).map((size,index)=>(
        <button key={index} className="buttonPreview" onClick={()=>handlePreview(photos.src[size])} disabled={loadingDownload}>Preview {size}</button>
        ))
      }
      </div>
      <div className="downloadContainer">
      {
        Object.keys(photos.src || {}).map((size,index)=>(
        <button key={index} className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src[size])} disabled={loadingDownload}>Download {size}</button>
        ))
      }
      </div>
     </div>
     
    </div>
  )
}

export default ModalDetail
