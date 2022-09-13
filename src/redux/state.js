const state = {
    profilePage:{
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
        ]
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
        ]
    },
    sidebar:{
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

export default state;