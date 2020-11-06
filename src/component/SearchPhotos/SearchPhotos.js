import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPhotoSearchBlock } from '../../features/photoSlice'
import { useGetSearchPhotos } from '../../useGetPhotos/useGetPhotos'
import CardPhoto from '../CardPhoto/CardPhoto'
import './SearchPhotos.scss'
function SearchPhotos() {
  const photoSearchBlock = useSelector(selectPhotoSearchBlock)
  const loading = photoSearchBlock.loadingPhotos
  const nextPage = photoSearchBlock.nextPage
  const photos = photoSearchBlock.photos
  const [pageNumber,setPageNumber] = useState(1)
  const {getSearchPhotos} = useGetSearchPhotos()
  useEffect(()=>{
    if(pageNumber === 1){
      return 
    }
    getSearchPhotos(photoSearchBlock.query,pageNumber)
  },[pageNumber])
  return (
    <div className="SearchPhotos">
      <div className="SearchPhotos__grid">
      {
          photos?.map(photo=>(
            photo?.map(photo=>(
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
          loading && <LinearProgress color="secondary"/>
        }
      </div>
      {
        nextPage && <button className="button_increase" onClick={()=>setPageNumber(current => current + 1)}>Load More...</button>
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
export default SearchPhotos
