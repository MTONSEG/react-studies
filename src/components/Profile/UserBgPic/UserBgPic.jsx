import cls from './UserBgPic.module.css';

const UserBgPic = (props) => {
	return (
		<div className={cls.block}>
			<img
				className={cls.image}
				src='https://picsum.photos/1200/300' />
		</div>
	)
}

export default UserBgPic;