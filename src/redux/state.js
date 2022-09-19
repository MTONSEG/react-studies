const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {
                    name: 'Maksym',
                    imageSrc: 'https://picsum.photos/200/300/'
                },
                {
                    name: 'Slesar',
                    imageSrc: 'https://picsum.photos/200/300/?blur'
                },
                {
                    id: 3,
                    name: 'Bomyus',
                    imageSrc: 'https://picsum.photos/200/300'
                }
            ],
        }
    },
    _callSubscriber() {
        console.log('Success')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let idPost = this._state.profilePage.postsData.length + 1;
            let post = this._state.profilePage.newPostText;
            let newPost = {
                id: idPost,
                message: post,
                imageSrc: 'https://picsum.photos/200/300/?blur'
            }

            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let idMess = this._state.dialogsPage.messageData.length + 1;
            let message = this._state.dialogsPage.newMessageText;
            let newMess = {
                id: idMess,
                message: message
            };

            this._state.dialogsPage.messageData.push(newMess);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPost;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const addMessActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
})
export const updateNewMessActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text
})

export default store; 