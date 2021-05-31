import React from 'react';
import { Redirect } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogsItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;
   
    let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody; 

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
               { dialogsElements }
            </div>

            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                            onChange={onNewMessageChange}
                            placeholder='Ennter your message'>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
                              
            </div>
        </div>
    )
}

export default Dialogs;