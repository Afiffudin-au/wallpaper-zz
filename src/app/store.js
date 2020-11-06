import { configureStore } from '@reduxjs/toolkit';
import photosReducer from '../features/photoSlice';
import videosReducer from '../features/videoSlice'
export default configureStore({
  reducer: {
    photos: photosReducer,
    videos : videosReducer
  },
});
