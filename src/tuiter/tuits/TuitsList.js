import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./TuitItem";
// import postArray from './tuits.json';



const TuitsList = () => {
    const postArray = useSelector(state => state.tuits);
    return (
        <ul className='list-group'>
            {
                postArray.map(post =>

                    <TuitItem
                    key={post._id} post={post}/>

                )

            }

        </ul>

    );
};

export default TuitsList;