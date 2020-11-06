import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videosBlock : {
      videos: [],
      loadingVideo : null,
      totalResult : null
    },
    videosDetails : []
  },
  reducers: {
    addVideos: (state,action) => {
      state.videosBlock.loadingVideo = action.payload.loading
      state.videosBlock.totalResult  = action.payload.dataVideo?.total_results
      if(action.payload.removeCopyArray){
        state.videosBlock.videos.length = 0
        return
      }
      if(action.payload.dataVideo === undefined){
        return
      }
      if(!action.payload.loading){
        state.videosBlock.videos = [...state.videosBlock.videos,action.payload?.dataVideo?.videos]
      }
    },
    addVideoDetails : (state,action)=>{
      state.videosDetails = action.payload
    }
  },
});

export const { addVideos,addVideoDetails } = videoSlice.actions
export const selectVideos = state => state.videos.videosBlock
export const selectVideoDetail = state => state.videos.videosDetails
export default videoSlice.reducer;
