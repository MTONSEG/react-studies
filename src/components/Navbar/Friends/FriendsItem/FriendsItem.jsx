import cls from './FriendsItem.module.scss';

const FriendsItem = (props) => {

    return (
        <li className={cls.item}>
            <img className={cls.image}
                src={props.imageSrc}
                alt='image'/>
            <span className={cls.name}>{props.name}</span>
        </li>
    );
}

export default FriendsItem;