import cls from './Dialogs.module.scss';
import Messages from './Messages/Messages';
import Names from './Names/Names';

const Dialogs = (props) => {
    return (
        <div className={cls.block}>
            <Names/>
            <Messages />
        </div>
    );
}

export default Dialogs;