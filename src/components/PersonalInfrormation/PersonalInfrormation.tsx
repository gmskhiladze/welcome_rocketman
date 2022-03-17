import React from 'react';

import "./PersonalInfrormation.scss"

import LeftPanel from "../shared/LeftPanel";
import RightPanel from "../shared/RightPanel";

const leftPanel = {
    title: "Hey, Rocketeer, what are your coordinates?",
};

const rightPanel = {
    title: "Redberry Origins",
    desc: "You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇"
};

function PersonalInfrormation({pages, page}: any) {
    return (
        <div className={"container"}>
            <LeftPanel pages={pages} page={page} title={leftPanel.title} />
            <RightPanel title={rightPanel.title} desc={rightPanel.desc}/>
        </div>
    );
}

export default PersonalInfrormation;