import React from 'react'
import './CardPhoto.scss'
import LazyLoad from 'react-lazyload';
import { useGetPhotoDetail } from '../../useGetPhotos/useGetPhotos';
import { Modal } from '@material-ui/core';
import ModalDetail from '../ModalDetail/ModalDetail';
function CardPhoto({id,url,imgPortrait}) {
  const {getPhotoDetail} = useGetPhotoDetail()
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleDetail = ()=>{
    setOpen(true);
    getPhotoDetail(id)
  }
  return (
    <>
    <div className="CardPhoto" onClick={handleDetail}>
      <LazyLoad height={600} offset={100} width={300}>               
        <img src={imgPortrait} alt={imgPortrait}/>
      </LazyLoad>
    </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{overflowY : 'scroll'}}
      >
      <ModalDetail handleClose={handleClose}/>
      </Modal>
    </>
  )
}

export default CardPhoto
