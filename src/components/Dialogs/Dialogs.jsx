import cls from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import Names from './Names/Names';

const Dialogs = (props) => {
    let store = props.store.getState().dialogsPage;

    return (
        <div className={cls.block}>
            <Names names={store.userData} />
            <Messages
                messages={store.messageData}
                newMessText={store.newMessText}
                dispatch={props.dispatch} />
        </div>
    );
}

export default Dialogs;