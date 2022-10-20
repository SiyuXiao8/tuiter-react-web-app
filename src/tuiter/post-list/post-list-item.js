import React from "react";
import "./index.css";

const PostListItem = (
    {
        post = {
            "userName": "Tesla",
            "handle": "Tesla",
            "time": "19h",
            "thumbnail": "/images/tesla.png",
            "description": "10 years of Supercharging. 46 countries. 35+ stalls. 20 billion miles charged.",
            "bodyImage": "/images/charge.jpeg",
            "commentCounts": "2,199",
            "retuits": "3,472",
            "likes": "28.2k"
        }
    }
) => {
    return(
        <>
            <div className='row'>
                <div className='col-1'>
                    <img alt='userImage' className='wd-thumbnail-size rounded-circle' src={`${post.thumbnail}`}/>
                </div>
                <div className='col-11 position-relative'>
                    <span className='fw-bold'>{post.userName} <i className="fa-solid fa-circle-check text-primary"></i></span>
                    <span className='text-muted'> @{post.handle} &#8226; {post.time}</span>
                    <div className='position-absolute wd-eli-pos text-muted'><i className="fa-solid fa-ellipsis"></i></div>
                    <div>{post.description}
                        {post.shoutOut &&
                            <span className='text-primary'> {post.shoutOut}</span>}

                    </div>

                    {post.bodyImage &&
                        <img alt='bodyImage' className='pt-3 pb-2 wd-body-img' src={post.bodyImage}/>
                    }

                    <div className="mt-2 mb-2">
                        <span className="">
                                <a href="/" className="text-muted text-decoration-none">
                                    <i className="far fa-comment"></i> <span
                                    className="ps-3">{post.commentCounts}</span>
                                </a>
                        </span>

                        <span className="wd-span-padding">
                            <a href="/" className="text-muted text-decoration-none">
                                <i className="fas fa-retweet"></i> <span className="ps-3">{post.retuits}</span>
                            </a>
                        </span>

                        <span className="wd-span-padding">
                        <a href="/" className="text-muted text-decoration-none">
                            <i className="far fa-heart"></i> <span className="ps-3">{post.likeCount}</span>
                        </a>
                        </span>

                        <span className="wd-span-padding">
                        <a href="/" className="text-muted text-decoration-none">
                            <i className="fas fa-share-square"></i>
                        </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostListItem;