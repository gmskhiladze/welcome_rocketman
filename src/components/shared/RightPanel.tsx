import React from 'react';

function RightPanel({title, desc}: any) {
    return (
        <div className={"panel right__panel"}>
            <div className={"right__panel__title"}>
                <h1>{title}</h1>
            </div>
            <div className={"right__panel__description"}>
                <span>{desc}</span>
            </div>
        </div>
    );
}

export default RightPanel;