import { createSlice } from '@reduxjs/toolkit';

export const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    photosBlock : {
      photos: [],
      loadingPhotos : null,
      nextPage : null
    },
    photosDetails : [],
    photoSearchBlock : {
      photos : [],
      loadingPhotos : null,
      nextPage : null,
      query : ''
    }
  },
  reducers: {
    addPhotos: (state,action) => {
      if(action.payload.removeCopyArray){
        state.photosBlock.photos.length = 0
        return
      }
      state.photosBlock.loadingPhotos = action.payload.loading
      state.photosBlock.nextPage = action.payload.dataPhotos?.next_page
      if(!action.payload.loading){
        state.photosBlock.photos = [...state.photosBlock.photos,action.payload.dataPhotos?.photos]
      }
    },
    addPhotoDetails : (state,action)=>{
      state.photosDetails = action.payload
    },
    addResultSearch : (state,action)=>{
      state.photoSearchBlock.loadingPhotos = action.payload.loading
      state.photoSearchBlock.query = action.payload.query
      state.photoSearchBlock.nextPage  = action.payload.dataPhotosResult?.next_page
      if(action.payload.removeCopyArray){
        state.photoSearchBlock.photos.length = 0
      }
      if(!action.payload.loading){
        state.photoSearchBlock.photos = [...state.photoSearchBlock.photos,action.payload?.dataPhotosResult?.photos]
      }
    }
  },
});

export const { addPhotos,addPhotoDetails,addResultSearch } = photoSlice.actions
export const selectPhotos = state => state.photos.photosBlock
export const selectPhotoDetails = state => state.photos.photosDetails
export const selectPhotoSearchBlock = state => state.photos.photoSearchBlock
export default photoSlice.reducer;
