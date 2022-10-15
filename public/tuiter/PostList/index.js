import posts from "./posts.js";
import postListItem from "./PostListItem.js";

const PostItems = () => {
    return (`
       ${posts.map(post => postListItem(post)).join('')}
    `);
};

export default PostItems;