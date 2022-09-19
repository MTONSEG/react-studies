import cls from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import Names from './Names/Names';

const Dialogs = (props) => {

    return (
        <div className={cls.block}>
            <Names names={props.dialogsPage.userData} />
            <Messages
                messages={props.dialogsPage.messageData}
                newMessText={props.dialogsPage.newMessText}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Dialogs;