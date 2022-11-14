import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import TuitItem from "./TuitItem";
// import postArray from './tuits.json';
import {findTuitThunk} from "../../services/tuits-thunks";


const TuitsList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitThunk())
    },[])
    // removed ,[] dependency array
    // const postArray = useSelector(state => state.tuits);
    return (
        <ul className='list-group'>
            {
                loading &&
                <li className='list-group-item'>
                    Loading...
                </li>
            }
            {
                tuits.map(post =>

                    <TuitItem
                    key={post._id} post={post}/>

                )

            }

        </ul>

    );
};

export default TuitsList;