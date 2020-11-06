import { createClient } from 'pexels';
import { useDispatch } from 'react-redux';
import { addVideos } from '../features/videoSlice';
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