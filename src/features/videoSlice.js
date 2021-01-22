import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videosBlock : {
      videos: [],
      loadingVideo : null,
      totalResult : null
    },
    videosDetails : [],
    videoSearchBlock : {
      videos : [],
      loadingVideo : null,
      totalResult : null,
      query : ''
    }
  },
  reducers: {
    addVideos: (state,action) => {
      state.videosBlock.loadingVideo = action.payload.loading
      state.videosBlock.totalResult  = action.payload.dataVideo?.total_results
      if(action.payload.removeCopyArray){
        state.videosBlock.videos.length = 0
        return
      }
      state.videosBlock.videos = [...state.videosBlock.videos,action.payload?.dataVideo?.videos || []]
    },
    addVideoDetails : (state,action)=>{
      state.videosDetails = action.payload
    },
    addVideoSearch : (state,action)=>{
      state.videoSearchBlock.loadingVideo = action.payload.loading
      state.videoSearchBlock.totalResult = action.payload.dataVideo?.total_results
      state.videoSearchBlock.query = action.payload.query
      if(action.payload.removeCopyArray){
        state.videoSearchBlock.videos.length = 0
        return
      } 
      state.videoSearchBlock.videos = [...state.videoSearchBlock.videos,action.payload?.dataVideo?.videos || []]
    }
  },
});

export const { addVideos,addVideoDetails,addVideoSearch } = videoSlice.actions
export const selectVideos = state => state.videos.videosBlock
export const selectVideoDetail = state => state.videos.videosDetails
export const selectVideoSearchBlock = state => state.videos.videoSearchBlock
export default videoSlice.reducer;
