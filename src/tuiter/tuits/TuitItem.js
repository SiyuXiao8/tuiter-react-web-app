import React from "react";
import './index.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import{deleteTuit} from "./tuits-reducer";

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
        dispatch(deleteTuit(id));
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
            <div>
                <TuitStats
                    replies={post.replies}
                    retuits={post.retuits}
                    likes={post.likes}
                    liked={post.liked}/>
            </div>
        </li>
    );
};

export default TuitItem;