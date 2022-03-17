import React from 'react';

import svgProvider from "../../helpers/SvgProvider";
import './Langing.scss'
import {useDispatch, useSelector} from "react-redux";

function Langing() {

    const dispatch = useDispatch();

    const startHandler = (e: any) => {
        dispatch({type: "start"})
        dispatch({type: "moveForward"})
    }

    return (
        <div className={"langing__container"}>
            <div className={"header__container"}>
                <h1 className={"header"}>Welcome Rocketeer !</h1>
            </div>
            
            <div className={"button__container"}>
                <button className={"btn btn__start"} onClick={startHandler}>Start Questionnaire</button>
                <button className={"btn btn__submitted_applications"}>Submitted Applications</button>
            </div>

            <div className={"rocketman__container"}>
                {svgProvider("rocketMan")}
            </div>
        </div>
    );
}

export default Langing;