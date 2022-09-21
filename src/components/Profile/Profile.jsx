import cls from './Profile.module.scss'
// import MyPosts from './MyPosts/MyPosts';
import UserBgPic from './UserBgPic/UserBgPic';
import UserInfo from './UserInfo/UserInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    console.log(props.profilePage.newPostText)
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
