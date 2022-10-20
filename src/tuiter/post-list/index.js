import React from "react";
import posts from "./posts.json";
import PostListItem from "./post-list-item";

const PostList = () => {
    return(
        <>
            {
                posts.map(post => <PostListItem post={post}/>)
            }
        </>
    );
};
export default PostList;