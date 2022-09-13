import cls from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import Names from './Names/Names';

const Dialogs = (props) => {


    return (
        <div className={cls.block}>
            <Names names={props.state.userData}/>
            <Messages messages={props.state.messageData}/>
        </div>
    );
}

export default Dialogs;