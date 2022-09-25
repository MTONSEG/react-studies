const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
	userData: [
		{
			id: 1,
			name: 'Maksym Savik',
			imageSrc: 'https://picsum.photos/200/300/'
		},
		{
			id: 2,
			name: 'Maksym Slesar',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
		{
			id: 3,
			name: 'Maksym Vycheslav Bomyus',
			imageSrc: 'https://picsum.photos/200/300'
		},
		{
			id: 4,
			name: 'Armat Maksym Gukis',
			imageSrc: 'https://picsum.photos/id/237/200/300'
		},
		{
			id: 5,
			name: 'Maksym Savik',
			imageSrc: 'https://picsum.photos/seed/picsum/200/300'
		},
	],
	messageData: [
		{ id: 1, message: 'Hello, World!' },
		{ id: 2, message: 'Hi!' },
		{ id: 3, message: 'How old are you ?' },
		{ id: 4, message: 'It fine!' },
		{ id: 5, message: 'Are you ?' },
	],
	newMessageText: 'test'
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE:
			let idMess = state.messageData.length + 1;
			let mess = state.newMessageText;
			let newMess = {
				id: idMess,
				message: mess,
			}

			state.messageData.push(newMess);
			state.newMessageText = '';
			return state
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newMessageText = action.newMessage;
			return state
		default: return state
	}
}

export const addMessActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessActionCreator = (text) => ({
	type: UPDATE_NEW_MESSAGE_TEXT,
	newMessage: text
})

export default dialogsReducer;