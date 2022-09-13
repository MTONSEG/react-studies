import cls from './Names.module.scss';
import NameItem from './NameItem/NameItem';

const Names = (props) => {
    let userElements = props.names.map((user, index) => {
        return (
            <NameItem
                id={user.id}
                name={user.name}
                imageSrc={user.imageSrc}
                key={index}
            />
        )
    })

    return (
        <div className={cls.users}>
            {userElements}
        </div>
    );
}

export default Names;