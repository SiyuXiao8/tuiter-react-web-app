import posts from "./posts.js";
import postSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
        <ul class="list-group">
            ${
                posts.map(post => postSummaryItem(post)).join('')
            }
        </ul>
    `)
}

export default PostSummaryList;