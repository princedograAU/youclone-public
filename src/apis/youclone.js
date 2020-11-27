import axios from 'axios';

export default axios.create({
    /**
     * @description establishes the connection with YouTube v3 api
     */
    baseURL: 'https://www.googleapis.com/youtube/v3',
});