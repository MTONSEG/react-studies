import cls from './Profile.module.scss'
import UserBgPic from './UserBgPic/UserBgPic';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    return (
        <div className={cls.block}>
            <UserBgPic />
            <UserInfo />
            <MyPostsContainer
                store={props.store}
            />

        </div>
    )
}

export default Profile;
