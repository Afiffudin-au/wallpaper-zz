import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    videosBlock : {
      videos: [],
      loadingVideo : null,
      totalResult : null
    },
  },
  reducers: {
    addVideos: (state,action) => {
      if(action.payload.removeCopyArray){
        state.videosBlock.videos.length = 0
        return
      }
      state.videosBlock.loadingVideo = action.payload.loading
      state.videosBlock.totalResult  = action.payload.dataVideo?.total_results
      if(!action.payload.loading){
        state.videosBlock.videos = [...state.videosBlock.videos,action.payload.dataVideo?.videos]
      }
    },
  },
});

export const { addVideos } = videoSlice.actions
export const selectVideos = state => state.videos.videosBlock
export default videoSlice.reducer;
