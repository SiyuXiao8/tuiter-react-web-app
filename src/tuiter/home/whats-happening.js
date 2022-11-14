import React, {useState} from "react";
import {createTuit} from "../reducers/tuits-reducer";
import {useDispatch} from "react-redux";
import {createTuitThunk} from "../../services/tuits-thunks";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            tuit: whatsHappening
        }
        // dispatch(createTuit(newTuit));
        dispatch(createTuitThunk(newTuit));
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img alt="nasa" src="/images/nasa.webp" width={60}/>
            </div>
            <div className="col-10">
       <textarea value={whatsHappening} placeholder="What's happening?"
                 className="form-control border-0"
                 onChange={(event) => setWhatsHappening(event.target.value)}>
   </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                            onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="fa-solid fa-image me-3"></i>
                        <i className="fa-solid fa-file-image me-3"></i>
                        <i className="fa-solid fa-chart-simple me-3"></i>
                        <i className="fa-regular fa-face-smile me-3"></i>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr/></div>
        </div>
    );
}

export default WhatsHappening;