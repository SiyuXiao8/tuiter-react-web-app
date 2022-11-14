import React from "react";
import './index.css';
// import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
// import{deleteTuit} from "../reducers/tuits-reducer";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.jpeg",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img alt="user" className='wd-thumbnail-size rounded-circle' src={`/images/${post.image}`}/>
                </div>
                <div className="col-11">
                    <span className='fw-bold'>{post.userName} <i className="fa-solid fa-circle-check text-primary"></i></span>
                    <span className='text-muted'> {post.handle} &#8226; {post.time}</span>
                    <i className="fa-solid fa-x float-end"
                        onClick={()=> deleteTuitHandler(post._id)}></i>
                    <p>{post.tuit}</p>
                </div>
            </div>

            <div className='ms-5'>
                <i className="fa-regular fa-comment me-1"></i>
                {post.replies}
                <i className="fa-solid fa-retweet ms-5 me-1"></i>
                {post.retuits}
                <span className='ms-5'>Likes: {post.likes}</span>
                <i onClick={()=> dispatch(updateTuitThunk({
                    ...post,
                    likes: post.likes + 1
                }))}
                    className="fa-regular fa-thumbs-up fs-5 ms-1 me-2"></i>
                Dislikes: {post.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...post,
                    dislikes: post.dislikes + 1
                }))}
                   className="fa-regular fa-thumbs-down fs-5 ms-2"></i>

                <i className="fa-regular fa-share-from-square ms-5"></i>
            </div>
        </li>
    );
};

export default TuitItem;