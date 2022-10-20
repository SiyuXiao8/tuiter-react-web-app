import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="fa-solid fa-magnifying-glass position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="fa-solid fa-gear wd-gear-pos text-primary
                        float-end fs-3 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2 mt-2">
                <li className="nav-item">
                    <a className="nav-link active" href='/'>For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/'>Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/'>News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img alt='starshipImage' src="/images/starship.jpeg" className="w-100"/>
                <h1 className="position-absolute bottom-0 start-0 text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;