import InfoUser from './InfoUser/InfoUser';
import UserAvatar from './UserAvatar/UserAvatar';
import cls from './UserInfo.module.css';

const UserInfo = () => {
	return (
		<div className={cls.block}>
			<UserAvatar />
			<InfoUser/>
		</div>
	);
}

export default UserInfo;