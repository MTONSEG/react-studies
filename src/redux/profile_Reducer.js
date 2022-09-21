const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
	postsData: [
		{
			id: 1,
			message: 'To use imports  you specify, you can add',
			imageSrc: 'https://picsum.photos/id/237/200/300'
		},
		{
			id: 2,
			message: 'roject root with the path specified in the SASS_PATH environment variable',
			imageSrc: 'https://picsum.photos/seed/picsum/200/300'
		},
		{
			id: 3,
			message: 'Note: If youre using Flow, override the module.file_ext setting in your .flowconfig so itll recognize .sass or .scss files. You will also need to include the',
			imageSrc: 'https://picsum.photos/200/300'
		},
		{
			id: 4,
			message: 'Windows operating system, separate your paths by semicolons',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
		{
			id: 5,
			message: 'Windows operating system, separate your paths by semicolons',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
	],
	newPostText: 'Hello, World!',
}

const profileReducer = (state = initialState, action) => {
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