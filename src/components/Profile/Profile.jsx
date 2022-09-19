import cls from './Profile.module.scss'
import MyPosts from './MyPosts/MyPosts';
import UserBgPic from './UserBgPic/UserBgPic';
import UserInfo from './UserInfo/UserInfo';

const Profile = (props) => {
    console.log(props.profilePage.newPostText)
    return (
        <div className={cls.block}>
            <UserBgPic />
            <UserInfo />
            <MyPosts
                posts={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;
