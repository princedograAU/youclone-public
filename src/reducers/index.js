import { combineReducers } from 'redux';
import videosReducer from './videoReducer';

export default combineReducers({
    fetchedVideos: videosReducer
});