import cls from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {

    let messageElements = props.messages.map((elem,index) => <Message message={elem.message} key={index}/>)
    //
    return (
        <div className={cls.messages}>
        {messageElements}
        </div>
    );
}

export default Messages;