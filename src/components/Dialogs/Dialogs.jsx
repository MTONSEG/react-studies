import cls from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import Names from './Names/Names';

const Dialogs = (props) => {

    return (
        <div className={cls.block}>
            <Names names={props.dialogsPage.userData} />
            <Messages
                messages={props.dialogsPage.messageData}
                addMess={props.addMess}
                newMessageText={props.dialogsPage.newMessageText}
                updateNewMessText={props.updateNewMessText} />
        </div>
    );
}

export default Dialogs;