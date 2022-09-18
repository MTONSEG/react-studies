let rerenderEntireTree = () => {
    console.log('Success')
}

const state = {
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
}


export const addPosts = () => {
    let idPost = state.profilePage.postsData.length + 1
    let newPost = {
        id: idPost,
        message: state.profilePage.newPostText,
        imageSrc: 'https://picsum.photos/200/300/?blur'
    }

    state.profilePage.postsData.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export const updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    rerenderEntireTree(state)
}

export const addMess = () => {
    let idMess = state.dialogsPage.messageData.length + 1;
    let newMess = {
        id: idMess,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messageData.push(newMess);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;