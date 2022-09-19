import cls from './Messages.module.scss';
import Message from './Message/Message';
import React from "react";
import { addMessActionCreator, updateNewMessActionCreator } from '../../../redux/state';

const Messages = (props) => {
    let messageElements = props.messages.map((elem, index) => <Message message={elem.message} key={index} />)

    let newMessageElement = React.createRef();

    let addMess = () => {
        let action = addMessActionCreator();
        props.dispatch(action)
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessActionCreator(text);
        props.dispatch(action)
    }

    return (
        <div className={cls.messages}>
            {messageElements}
            <textarea
                onChange={onChangeMessage}
                ref={newMessageElement}
                value={props.newMessageText}>
            </textarea>
            <button onClick={addMess}>Send</button>
        </div>
    );

}

export default Messages;

