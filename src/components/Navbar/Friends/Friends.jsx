import cls from './Friends.module.scss';
import FriendsItem from "./FriendsItem/FriendsItem";

const Friends = (props) => {
	let usersElement = props.users.map((item, index) => {
		return (
			<FriendsItem name={item.name} imageSrc={item.imageSrc}/>
		)
	})

	return (
		<div className={cls.block}>
			<h2 className={cls.title}>Friends</h2>
			<ul className={cls.list}>
				{usersElement}
			</ul>
		</div>
	);
}

export default Friends;