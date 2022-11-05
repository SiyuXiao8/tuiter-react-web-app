import React from "react";
import postsArray from '../data/posts.json';
import PostSummaryItem
    from "./post-summary-item";

const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;