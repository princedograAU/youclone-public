import { FETCH_VIDEOS, SET_SELECTED_VIDEO, FETCH_RELATED_VIDEOS } from '../actions/type';
import _ from 'lodash';

// default state
const INITIAL_STATE = {
    videos: {},
    selectedVideo: {},
    relatedVideos: {}
};

export default (state=INITIAL_STATE, action) => {
    
    switch(action.type) {
        case FETCH_VIDEOS:
            return {...state, videos: _.mapKeys(action.payload, 'id.videoId')};
        case SET_SELECTED_VIDEO:
            return {...state, selectedVideo: action.payload}
        case FETCH_RELATED_VIDEOS:
            return {...state, relatedVideos: _.mapKeys(action.payload, 'id.videoId')};
        default:
            return state;
    }
}