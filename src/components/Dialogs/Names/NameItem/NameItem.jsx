import cls from './NameItem.module.scss';
import { NavLink } from 'react-router-dom';

const NameItem = (props) => {
    return (
        <div className={cls.user}>
            <NavLink to={`/dialogs/${props.id}`} className={cls.link}>{props.name}</NavLink>
        </div>
    )
}

export default NameItem;