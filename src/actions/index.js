import { FETCH_VIDEOS, FETCH_RELATED_VIDEOS, SET_SELECTED_VIDEO } from './type';
import { KEY } from '../key';

import YouCloneAPI from '../apis/youclone';
import history from '../history';

export const fetchVideos = queryString => {
    /**
     * @description Action creator to make call to YouTube v3 api and fetch videos matching query string
     * @param {string} queryString 
     * @example response contains following fields
     * {
     *  "kind": "youtube#searchListResponse",
     *  "etag": etag,
     *  "nextPageToken": string,
     *  "prevPageToken": string,
     *  "regionCode": string,
     *  "pageInfo": {
     *      "totalResults": integer,
     *      "resultsPerPage": integer
     *  },
     *  "items": [
     *      search Resource
     *      ]
     *  }
     */
    return async dispatch => {
        const response = await YouCloneAPI.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 12,
                key: `${KEY}`,
                q: queryString
            }
        });

        dispatch({
            type: FETCH_VIDEOS,
            payload: response.data.items
        });
    }
};

export const searchFetchVideos = queryString => {
    /**
     * @description Action creator to make call to YouTube v3 api and fetch videos matching query string
     * It uses async await syntax to make api call YouCloneAPI. After making a call it waits for 
     * response and dispatches the action of type FETCH_VIDEO with payload of videos 
     * Lastly, it redirects to results page where user can view the videos related to query string entered
     * in the search bar.
     * @param {string} queryString 
     */
    return async dispatch => {
        const response = await YouCloneAPI.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 12,
                key: `${KEY}`,
                q: queryString
            }
        });
        dispatch({
            type: FETCH_VIDEOS,
            payload: response.data.items
        });
        // redirect to "https.youclone.abc/results/iron man"
        history.push(`/results/${queryString}`);
    }
};

export const setSelectedVideo = video => {
    /**
     * @description setSelectedVideo action creator helps to maintain a state to store the video 
     * selected by the user. This selected video Object is used to find related videos and comments. 
     * @param video - expects a video objected selected by the use.
     */
    return {
        type: SET_SELECTED_VIDEO,
        payload: video
    }
}

export const fetchVideo = videoId => {
    /**
     * @example fetchVideo - allows to fetch a single YouTube video. It is useful when 
     * only Id of the video is known.
     * @param videoId - id of the video that needs to be fetched
     */
    return async dispatch => {
        const response = await YouCloneAPI.get('/videos', {
            params: {
                part: 'snippet,contentDetails',
                id: videoId,
                key: `${KEY}`
            }
        });

        dispatch({
            type: SET_SELECTED_VIDEO,
            payload: response.data.items[0]
        });
    }
}

export const fetchRelatedVideos = videoId => {
    /**
     * @description fetch Related videos to the video Id
     * @param videoId - it expects to receive a videoId to fetch related videos to it
     * @default result - number of videos fetched by this action creator is 12
     */
    return async dispatch => {
        const response = await YouCloneAPI.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 12,
                key: `${KEY}`,
                relatedToVideoId: videoId
            }
        });

        dispatch({
            type: FETCH_RELATED_VIDEOS,
            payload: response.data.items
        })
    }
}

//////////////////////////////////////////////////////////////////
// S A M P L E  A P I  C A L L  T O  F E T C H  C O M M E N T S //
//////////////////////////////////////////////////////////////////
// 
// const response = await YouCloneAPI.get('/channels', {
//     params: {
//         part: 'snippet',
//         maxResults: 5,
//         id: 'UC7wXt18f2iA3EDXeqAVuKng',
//         key: `${KEY}`,
//     }
// });