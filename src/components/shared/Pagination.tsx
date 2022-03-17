import React from 'react';
import svgProvider from "../../helpers/SvgProvider";
import {useDispatch, useSelector} from "react-redux";

function Pagination() {

    const dispatch = useDispatch();

    // @ts-ignore
    const current = useSelector((state) => state.currentPage)

    console.log(current)

    const switchForward = (e: any) => {

        e.preventDefault();

        dispatch({type: "moveForward"});

    }

    const switchBack = () => {

        dispatch({type: "moveBackward"});
        dispatch({type: "start"});

    }

    return (
        <div className={"pagination"}>
            <button className={"arrowLeft"} onClick={switchBack}>{svgProvider("arrowLeft")}</button>
            <div className={"circles"}>
                <button className={`circle ${current > 0 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                <button className={`circle ${current > 1 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                <button className={`circle ${current > 2 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                <button className={`circle ${current > 3 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
                <button className={`circle ${current > 4 ? "selected " : ""} />}`}>{svgProvider("circle")}</button>
            </div>
            <button className={"arrowRight"} onSubmit={switchForward} onClick={switchForward}>{svgProvider("arrowRight")}</button>
        </div>
    );
}

export default Pagination;