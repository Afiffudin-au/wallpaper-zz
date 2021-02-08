import { createClient } from 'pexels';
import { useDispatch } from 'react-redux';
import { addPhotoDetails, addPhotos, addResultSearch } from '../features/photoSlice';
const client = createClient('563492ad6f9170000100000170236dd5ebbc4d13936b1f6d2e44461c');
export function useGetCuratedPhotos(){
  const dispatch = useDispatch()
  const getCuratedPhotos = (pageNumber)=>{
    dispatch(addPhotos({
      loading : true
    }))
    client.photos.curated({ per_page: 20,page : pageNumber }).then(photos => {
      dispatch(addPhotos({
        dataPhotos : photos,
        loading : false
      }))
    }).catch(err=>{
      dispatch(addPhotos({
        loading : false
      }))
      alert(err)
    });
  }
  return {getCuratedPhotos}
}
export function useGetSearchPhotos(){
  const dispatch = useDispatch()
  const getSearchPhotos = (query,pageNumber)=>{
    dispatch(addResultSearch({
      loading : true,
      query : query
    }))
    client.photos.search({ query , per_page: 20,page : pageNumber }).then(photos => {
      console.log(photos)
      dispatch(addResultSearch({
        loading : false,
        dataPhotosResult : photos,
        query : query,
        totalResults : photos.total_results
      }))
    }).catch(err=>{
      dispatch(addResultSearch({
        loading : false
      }))
      alert(err)
    });
  }
  return {getSearchPhotos}
}
export function useGetPhotoDetail(){
  const dispatch = useDispatch()
  const getPhotoDetail = (id)=>{
    dispatch(addPhotoDetails({
      loading : true,
    }))
    client.photos.show({ id: id }).then(photo => {
      dispatch(addPhotoDetails({
        loading : false,
        dataPhotoDetails : photo
      }))
    }).catch(err=>{
      dispatch(addPhotoDetails({
        loading : false
      }))
      alert(err)
    });
  }
  return {getPhotoDetail}
}