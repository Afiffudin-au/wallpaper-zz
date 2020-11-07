import { createClient } from 'pexels';
import { useDispatch } from 'react-redux';
import { addVideoDetails, addVideos, addVideoSearch } from '../features/videoSlice';
export function useGetVideoPopular(){
  const dispatch = useDispatch()
  const getVideoPopular = (pageNumber)=>{
    dispatch(addVideos({
      loading:true
    }))
    const client = createClient('563492ad6f9170000100000170236dd5ebbc4d13936b1f6d2e44461c');
    client.videos.popular({ per_page: 20,page : pageNumber }).then(videos => {
      dispatch(addVideos({
        loading:false,
        dataVideo : videos
      }))
    }).catch(err=>{
      dispatch(addVideos({
        loading:false,
      }))
      alert(err)
    });
  }
  return{getVideoPopular}
}
export function useGetVideoDetail(){
  const dispatch = useDispatch()
  const client = createClient('563492ad6f9170000100000170236dd5ebbc4d13936b1f6d2e44461c');
  const getVideoDetail = (id)=>{
    dispatch(addVideoDetails({
      loading : true,
      dataVideoDetails : []
    }))
    client.videos.show({ id: id }).then(photo => {
      dispatch(addVideoDetails({
        loading : false,
        dataVideoDetails : photo
      }))
    }).catch(err=>{
      dispatch(addVideoDetails({
        loading : false
      }))
      alert(err)
    });
  }
  return{getVideoDetail}
}
export function useGetVideoSearch(){
  const dispatch = useDispatch()
  const getVideoSearch = (query,pageNumber)=>{
    const client = createClient('563492ad6f9170000100000170236dd5ebbc4d13936b1f6d2e44461c');
    dispatch(addVideoSearch({
      loading : true,
      query : query
    }))
    client.videos.search({ query, per_page: 20,page : pageNumber }).then(videos => {
      dispatch(addVideoSearch({
        loading : false,
        dataVideo : videos,
        query : query
      }))
    }).catch(err=>{
      dispatch(addVideoSearch({
        loading : false,
      }))
      alert(err)
    });
  }
  return{
    getVideoSearch
  }
}