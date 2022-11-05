import React from "react";
import {useSelector} from "react-redux"; // this extract info from a store

const HelloReduxExampleComponent = () => {
    const message = useSelector((state) => state.hello.message);
    return(
        <h1>{message}</h1>
    );
};

export default HelloReduxExampleComponent;