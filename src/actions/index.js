import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const BASE_URL = 'http://reduxblog.herokuapp.com/api';
const KEY = '?key=9988445';

export function  fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${KEY}`);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}