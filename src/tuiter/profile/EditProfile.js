import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {updateFirstName, updateLastName,
        updateBio, updateLocation,
        updateWebsite,updateBirth } from '../reducers/profile-reducer';

const EditProfile = () => {
    const data = useSelector(state => state.profile);
    let [firstname, setFirstName] = useState(data.firstName);
    let [lastname, setLastname] = useState(data.lastName);
    let [bio, setBio] = useState(data.bio);
    let [location, setLocation] = useState(data.location);
    let [website, setWebsite] = useState(data.website);
    let [birth, setBirth] = useState(data.dateOfBirth);

    const dispatch = useDispatch();
    const saveClickHandler = () => {
        dispatch(updateFirstName(firstname));
        dispatch(updateLastName(lastname));
        dispatch(updateBio(bio));
        dispatch(updateLocation(location));
        dispatch(updateWebsite(website));
        dispatch(updateBirth(birth));
    }
    return(
        <>
            <div className='row'>
                <div className='col-1'>
                    <Link className='text-muted' to='/tuiter/profile'>
                        <i className="fa-solid fa-xmark fs-3"></i>
                    </Link>
                </div>
                <div className='col-11'>
                    <span className='fs-3 fw-bold'>Edit Profile</span>
                    <Link to={'/tuiter/profile'}>
                        <button className='btn btn-dark rounded-pill float-end'
                                onClick={saveClickHandler}>
                            Save
                        </button>
                    </Link>
                </div>
            </div>
            <img alt="banner" className='wd-banner-size' src={`/images/${data.bannerPicture}`}></img>
            <div className='mt-2 position-relative'>
                <img alt="user" className='position-absolute wd-profile rounded-circle' src={`/images/${data.profilePicture}`}></img>
            </div>
            <br/><br/>

            <div className="form-floating w-25 d-inline-block">
                <textarea value={firstname} className="form-control"  id="floatingTextarea1"
                          style={{height: 50+'px'}}
                    onChange={(event)=> setFirstName(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea1">First Name</label>
            </div>
            <div className="form-floating w-25 d-inline-block ms-2">
                <textarea value={lastname} className="form-control"  id="floatingTextarea1.2"
                          style={{height: 50+'px'}}
                          onChange={(event)=> setLastname(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea1.2">Last Name</label>
            </div>

            <div className="form-floating mt-4">
                <textarea value={bio} className="form-control"  id="floatingTextarea2"
                          style={{height: 100+'px'}}
                          onChange={(event)=> setBio(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea2">Bio</label>
            </div>

            <div className="form-floating mt-4">
                <textarea value={location} className="form-control"  id="floatingTextarea3"
                          style={{height: 50+'px'}}
                          onChange={(event)=> setLocation(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea3">Location</label>
            </div>

            <div className="form-floating mt-4">
                <textarea value={website} className="form-control"  id="floatingTextarea4"
                          style={{height: 50+'px'}}
                          onChange={(event)=> setWebsite(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea4">Website</label>
            </div>

            <div className="form-floating mt-4">
                <textarea value={birth} className="form-control"  id="floatingTextarea5"
                          style={{height: 50+'px'}}
                          onChange={(event)=> setBirth(event.target.value)}></textarea>
                <label htmlFor="floatingTextarea5">Birth date</label>
            </div>
        </>
    );
};

export default EditProfile;