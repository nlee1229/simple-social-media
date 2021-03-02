import * as api from '../api'; // means we import everything from actions as api

// Actions creators (functions that return actions)
const getPosts = () => {
    const action = {type: 'FETCH_ALL', payload: []} // payload is the data where we store all of our posts

    return action;
}