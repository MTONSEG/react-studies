import cls from './Messages.module.scss';
import Message from './Message/Message';
import React from "react";

const Messages = (props) => {
    let messageElements = props.messages.map((elem, index) => <Message message={elem.message} key={index}/>)

    let newMsgElement = React.createRef();

    let addPost = () =>{
        let text = newMsgElement.current.value;
        alert(text);
    }

    return (
        <div className={cls.messages}>
            {messageElements}
            <textarea ref={newMsgElement}></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    );
}

export default Messages;