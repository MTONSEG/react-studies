import cls from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import UserBgPic from './UserBgPic/UserBgPic';
import UserInfo from './UserInfo/UserInfo';

const Main = () => {
	return (
		<main className={cls.main}>
			<UserBgPic />
			<UserInfo/>
			<MyPosts/>
		</main>
	)
}

export default Main;
