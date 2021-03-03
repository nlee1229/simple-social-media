export default (posts = [], action) => { // posts has to be equal to something. in thise case, our posts will be in an array
    switch (action.type) {
        case 'UPDATE':
            return posts.map((post) => post._id == action.payload._id ? action.payload : post); // action.payload is our updated post
        case 'FETCH_ALL':
            return action.payload; // action.payload are our posts
        case 'CREATE':
            return [ ...posts, action.payload]; // spread all posts then add new post which is stored in action.payload
        default:
            return posts;
    }
}