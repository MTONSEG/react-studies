import cls from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts';
import UserBgPic from './UserBgPic/UserBgPic';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {

	return (
		<div className={cls.block}>
			<UserBgPic />
			<UserInfo/>
			<MyPosts posts={props.posts}/>
		</div>
	)
}

export default Profile;
