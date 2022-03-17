import React from 'react';

import Pagination from "./Pagination";

function LeftPanel({ pages, page, title}: any) {

    const changeHandler = (e : any) => {

        const {type, name, value} = e.target;

        if (e){
            console.log(type, name, value);
        }
    }

    return (
        <div className={"panel left__panel"}>
            <div className={"left__panel__title"}>
                <h1>{title}</h1>
            </div>
            <div className={"left__panel__inputs"}>
                <form>
                    <div className="form__group">
                        <input className={"input__text"} type={'text'} id={"first_name"} name={"first_name"}
                               placeholder={"First Name"} onChange={changeHandler} required/>
                        <div className="error__message">* this is error</div>
                    </div>

                    <div className="form__group">
                        <input className={"input__text"} type={'text'} name={"last_name"} placeholder={"Last Name"}
                               onChange={changeHandler} required/>
                        <div className="error__message">* this is error</div>
                    </div>

                    <div className="form__group">
                        <input className={"input__email"} type={'email'} name={"email"} placeholder={"E Mail"}
                               onChange={changeHandler} required/>
                        <div className="error__message">* this is error</div>
                    </div>

                    <div className="form__group">
                        <input className={"input__tel"} type={'tel'} name={"phone"} placeholder={"+995 5__ __ __ __"}
                               maxLength={13} onChange={changeHandler}/>
                        <div className="error__message">* this is error</div>
                    </div>
                </form>
            </div>
            <div className={"left__panel__navigation"}>
                {<Pagination/>}
            </div>
        </div>
    );
}

export default LeftPanel;