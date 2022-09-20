const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
	switch (action.type) {
		case ADD_POST:
			let idPost = state.postsData.length + 1;
			let post = state.newPostText;
			let newPost = {
				id: idPost,
				message: post,
				imageSrc: 'https://picsum.photos/200/300/?blur'
			}

			state.postsData.push(newPost);
			state.newPostText = '';
			return state
		case UPDATE_NEW_POST_TEXT:
			state.newPostText = action.newPost;
			return state
		default: return state
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT,
	newPost: text
})

export default profileReducer;