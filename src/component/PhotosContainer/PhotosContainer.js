import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPhotos, selectPhotos } from '../../features/photoSlice'
import { useGetCuratedPhotos } from '../../useGetPhotos/useGetPhotos'
import CardPhoto from '../CardPhoto/CardPhoto'
import './PhotosContainer.scss'
import LinearProgress from '@material-ui/core/LinearProgress';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { IconButton } from '@material-ui/core'
function PhotosContainer() {
  const dispatch = useDispatch()
  const {getCuratedPhotos} = useGetCuratedPhotos()
  const [pageNumber,setPageNumber] = useState(1)
  const {photos,loadingPhotos,nextPage} = useSelector(selectPhotos)
  useEffect(()=>{
    dispatch(addPhotos({
      removeCopyArray : true
    }))
  },[])
  useEffect(()=>{
    getCuratedPhotos(pageNumber)
  },[pageNumber])
  return (
    <div className="photosContainer">
      <div className="photosContainer__grid">
        {
          photos?.map(photo=>(
            photo.map(photo=>(
              <div key={photo.id}>
                <MemoizedChildComponent
                id={photo.id}
                url={photo.url}
                imgPortrait={photo.src.portrait} />
              </div>
            ))
          ))
        }
      </div>
      <div style={{position : 'sticky',top : 0,marginBottom : '5px'}}>
      {
        loadingPhotos && <LinearProgress color="secondary"/>
      }
      </div>
      {
        nextPage && <button className="button_increase" onClick={()=>setPageNumber(current => current + 1)}>Load More...</button>
      }
      {
        !loadingPhotos && <IconButton>
          <a href="#navTop">
            <ArrowUpwardIcon className="backTop"/>
          </a>
        </IconButton>
      }
    </div>
  )
}
function ChildComponent({id,url,imgPortrait}){
  return(
    <CardPhoto 
      id={id}
      url={url}
      imgPortrait={imgPortrait}
    />
  )
}
const MemoizedChildComponent = React.memo(ChildComponent)
export default PhotosContainer
