import cls from './Messages.module.scss';
import Message from './Message/Message';
import React from "react";

const Messages = (props) => {
    let messageElements = props.messages.map((elem, index) => <Message message={elem.message} key={index} />)

    let newMessageElement = React.createRef();

    let addMess = () => {
        props.addMess();
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessText(text);
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

