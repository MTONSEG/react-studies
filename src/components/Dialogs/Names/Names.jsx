import cls from './Names.module.scss';
import NameItem from './NameItem/NameItem';

const Names = (props) => {
    let userElements = props.names.map((user, index) => <NameItem id={user.id} name={user.name} key={index}/>)

    return (
        <div className={cls.users}>
             {userElements}
        </div>
    );
}

export default Names;