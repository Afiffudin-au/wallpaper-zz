import { IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
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
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.tiny)} disabled={loadingDownload}>Preview tiny</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.small)} disabled={loadingDownload}>Preview small</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.portrait)} disabled={loadingDownload}>Preview portrait</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.original)} disabled={loadingDownload}>Preview Original</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.medium)} disabled={loadingDownload}>Preview medium</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.large2x)} disabled={loadingDownload}>Preview large2x</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.large)} disabled={loadingDownload}>Preview large</button>
        <button className="buttonPreview" onClick={()=>handlePreview(photos.src?.landscape)} disabled={loadingDownload}>Preview landscape</button>
      </div>
      <div className="downloadContainer">
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.tiny)} disabled={loadingDownload}>Download tiny</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.small)} disabled={loadingDownload}>Download small</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.portrait)} disabled={loadingDownload}>Download portrait</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.original)} disabled={loadingDownload}>Download Original</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.medium)} disabled={loadingDownload}>Download medium</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.large2x)} disabled={loadingDownload}>Download large2x</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.large)} disabled={loadingDownload}>Download large</button>
        <button className="buttonDownload" onClick={()=>getDownloadPhoto(photos.src?.landscape)} disabled={loadingDownload}>Download landscape</button>
      </div>
     </div>
     
    </div>
  )
}

export default ModalDetail
