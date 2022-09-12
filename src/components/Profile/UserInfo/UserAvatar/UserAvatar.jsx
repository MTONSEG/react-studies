import cls from './UserAvatar.module.scss';

const UserAvatar = () => {
	return (
		<div className={cls.block}>
			<img
				className={cls.image} src='https://picsum.photos/128'
			/>
		</div>
	);
}

export default UserAvatar;