import cls from './Messages.module.scss';
import Message from './Message/Message';

const Messages = (props) => {
    let messageData = [
        { id: 1, message: 'Hello, World!' },
        { id: 2, message: 'Hi!' },
        { id: 3, message: 'How old are you ?' },
        { id: 4, message: 'It fine!' },
        { id: 5, message: 'Are you ?' },
    ]

    let messageElements = messageData
        .map(msg => <Message message={msg.message} />);

    return (
        <div className={cls.messages}>
        {messageElements}
        </div>
    );
}

export default Messages;