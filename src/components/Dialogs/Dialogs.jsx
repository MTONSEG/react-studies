import cls from './Dialogs.module.scss';
import Message from './Messages/Message';
import NameItem from './Names/NameItem';

const Dialogs = (props) => {
    let userElements = props.userData.map((user, index) => {
        return (
            <NameItem
                id={user.id}
                name={user.name}
                imageSrc={user.imageSrc}
                key={index}
            />
        )
    })
    let messageElements = props.messageData.map((elem, index) => <Message message={elem.message} key={index} />)
    let newMessText = props.newMessText;

    let onAddMess = () => {
        props.addMess()
    }

    let onChangeMessage = (e) => {
        let text = e.target.value;
        props.updateNewMess(text)
    }
    return (
        <div className={cls.block}>
            <div className={cls.users}>
                {userElements}
            </div>
            <div className={cls.messages}>
                {messageElements}
                <textarea
                    onChange={onChangeMessage}
                    value={newMessText}>
                </textarea>
                <button onClick={onAddMess}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;