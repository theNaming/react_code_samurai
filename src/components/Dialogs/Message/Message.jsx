import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

    let newMessageElement = React.createRef();

    // let text = newMessageElement.current.value;
    // alert(text);
 
    return (
        <div className={s.dialog}>
            {props.message}
        </div>

    )
}

export default Message;