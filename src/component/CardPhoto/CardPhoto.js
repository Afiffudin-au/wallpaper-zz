import React from 'react'
import './CardPhoto.scss'
import LazyLoad from 'react-lazyload';
import { useGetPhotoDetail } from '../../useGetPhotos/useGetPhotos';
import { useHistory } from 'react-router-dom';
function CardPhoto({id,url,imgPortrait}) {
  const {getPhotoDetail} = useGetPhotoDetail()
  const history = useHistory()
  const handleDetail = ()=>{
    getPhotoDetail(id)
    history.push('/photo-detail')
  }
  return (
    <div className="CardPhoto" onClick={handleDetail}>
      <LazyLoad height={600} offset={100}>               
        <img src={imgPortrait} alt={imgPortrait}/>
      </LazyLoad>
    </div>
  )
}

export default CardPhoto
