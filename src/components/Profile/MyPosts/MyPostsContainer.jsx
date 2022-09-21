import { updateNewPostActionCreator, addPostActionCreator } from '../../../redux/profile_Reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let store = props.store;

	let addPost = () => {
		let action = addPostActionCreator();
		store.dispatch(action);
	}

	let updateNewPostText = (text) => {
		let action = updateNewPostActionCreator(text)
		store.dispatch(action)
	}

	return <MyPosts
		updateNewPostText={updateNewPostText}
		addPost={addPost}
		newPostText={store.getState().profilePage.newPostText}
		posts={store.getState().profilePage.postsData}
	/>;
}

export default MyPostsContainer;