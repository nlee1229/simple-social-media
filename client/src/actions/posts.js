import * as api from '../api/index'; // means we import everything from actions as api

// Actions creators (functions that return actions)
// An action is just an object that has the type and a payload
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    } 
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: 'UPDATE', payload: data});
    } catch (error) {
        console.log(error.message);
    }
}