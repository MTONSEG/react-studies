import cls from './Messages.module.scss';
import Message from './Message/Message';
import React from "react";
import { addMessActionCreator, updateNewMessActionCreator } from '../../../redux/dialogs_Reducer';

const Messages = (props) => {
    let messageElements = props.messages.map((elem, index) => <Message message={elem.message} key={index} />)
    let newMessText = props.newMessageText;

    let addMess = () => {
        let action = addMessActionCreator();
        props.dispatch(action)
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        let action = updateNewMessActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={cls.messages}>
            {messageElements}
            <textarea
                onChange={onChangeMessage}
                value={newMessText}>
            </textarea>
            <button onClick={addMess}>Send</button>
        </div>
    );

}

export default Messages;

