export default (posts = [], action) => { // posts has to be equal to something. in thise case, our posts will be in an array
    switch (action.type) {
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}