const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
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