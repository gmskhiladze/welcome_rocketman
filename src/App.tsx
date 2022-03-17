import React from 'react';
import './App.scss';

import Langing from "./components/Langing/Langing";
import PersonalInfrormation from "./components/PersonalInfrormation/PersonalInfrormation";
import {useSelector} from "react-redux";

function App() {

    // @ts-ignore
    const isReady = useSelector((state: object)  => state.showLanging)
    // @ts-ignore
    const current = useSelector((state: object)  => state.currentPage)
    // @ts-ignore
    const personalIsReady = useSelector((state: object)  => state.personalInfoIsReady)

    console.log(isReady)

    return (
    <div className="App">

        {isReady && current === 0 && <Langing/>}

        {current === 1 && <PersonalInfrormation/>}

        {!personalIsReady && current === 2 && "gg"}

    </div>
  );
}

export default App;
