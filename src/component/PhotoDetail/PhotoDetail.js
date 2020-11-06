import React from 'react'
import { useSelector } from 'react-redux'
import { selectPhotoDetails } from '../../features/photoSlice'
import LinearProgress from '@material-ui/core/LinearProgress';
import Skeleton from '@material-ui/lab/Skeleton';
import './PhotoDetail.scss'
import { saveAs } from 'file-saver';
function PhotoDetail() {
  const photoDetail = useSelector(selectPhotoDetails)
  const newPhotoDetail = photoDetail.dataPhotoDetails
  const sizeKey = newPhotoDetail?.src
  const handleDownload = (sizeKey)=>{
    if(sizeKey === 'original'){
      saveAs(newPhotoDetail.src.original, `${newPhotoDetail.src.original}.jpg`);
    } 
    if(sizeKey === 'large'){
      saveAs(newPhotoDetail.src.large, `${newPhotoDetail.src.large}.jpg`);
    }  
    if(sizeKey === 'medium'){
      saveAs(newPhotoDetail.src.medium, `${newPhotoDetail.src.medium}.jpg`);
    } 
    if(sizeKey === 'small'){
      saveAs(newPhotoDetail.src.small, `${newPhotoDetail.src.small}.jpg`);
    } 
    if(sizeKey === 'portrait'){
      saveAs(newPhotoDetail.src.portrait, `${newPhotoDetail.src.portrait}.jpg`);
    } 
    if(sizeKey === 'landscape'){
      saveAs(newPhotoDetail.src.landscape, `${newPhotoDetail.src.landscape}.jpg`);
    } 
    if(sizeKey === 'tiny'){
     saveAs(newPhotoDetail.src.tiny, `${newPhotoDetail.src.tiny}.jpg`); 
    }
    return false
  }
  return (
    <div className="PhotoDetail">
      <div className="loading" style={{position : 'sticky',top : 0,marginBottom : '5px'}}>
        {
          photoDetail.loading && <LinearProgress color="secondary"/>
        }
      </div>
      <div className="PhotoDetails__content">
        <div className="PhotoDetail__image">
          {
            newPhotoDetail?.src?.portrait ? (
              <img src={newPhotoDetail.src.portrait} alt={newPhotoDetail.src.portrait}/>
            ):(
              <Skeleton variant="rect" width={700} height={650} />
            )
          }
        </div>
        <div className="PhotoDetail_donwload">
          {
            sizeKey &&  Object.keys(sizeKey).map(sizeKey=>(
              <button key={sizeKey} onClick={()=>handleDownload(sizeKey)}>Download {sizeKey}</button>
            ))  
          }
        </div>
      </div>
    </div>
  )
}

export default PhotoDetail
